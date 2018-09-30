using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule.DAL.Entities;
using Schedule.Domain;

namespace Schedule.DAL
{
    public class Repository : IRepository
    {
        public Subject Save(Subject subject) //++
        {
            using (var context = new ScheduleContext())
            {
                var result = SaveSubject(subject, context);
                context.SaveChanges();

                return result;
            }
        }

        public Subject Update(Subject subject) //+
        {
            using (var context = new ScheduleContext())
            {
                var result = UpdateSubject(subject, context);
                context.SaveChanges();

                return result;
            }
        }

        public bool RemoveSubject(Guid id) //+
        {
            using (var context = new ScheduleContext())
            {
                var status = RemoveSubject(id, context);
                context.SaveChanges();

                return status;
            }
        }

        public WorkWeek Save(WorkWeek workWeek) //+
        {
            using (var context = new ScheduleContext())
            {
                var result = SaveWorkWeek(workWeek, context);

                context.SaveChanges();

                foreach (var subject in workWeek.Subjects)
                {
                    subject.WorkWeek.Id = result.Id;//!
                    SaveSubject(subject, context);
                }

                context.SaveChanges();

                return result;
            }
        }

        public bool RemoveWorkWeek(Guid id) //+
        {
            using (var context = new ScheduleContext())
            {
                var status = RemoveWorkWeek(id, context);
                context.SaveChanges();

                return status;
            }
        }

        public bool RemoveDay(Guid id, Day day)
        {
            using (var context = new ScheduleContext())
            {
                var status = RemoveDay(id, day, context);
                context.SaveChanges();

                return status;
            }
        }

        public Subject GetSubjectById(Guid id) //+
        {
            using (var context = new ScheduleContext())
            {
                return GetSubjectById(id, context);
            }
        }

        public WorkWeek GetWorkWeekById(Guid id) //+
        {
            using (var context = new ScheduleContext())
            {
                return GetWorkWeekById(id, context);
            }
        }

        public ICollection<WorkWeek> GetAllWorkWeeks()//+
        {
            using (var context = new ScheduleContext())
            {
                return context.WorkWeeks.Include(nameof(WorkWeek.Subjects)).ToArray().Select(x => x.MapToModel()).ToArray();
            }
        }

        private Subject SaveSubject(Subject subject, ScheduleContext context) //+
        {
            SubjectEntity subjectEntity;

            var workWeek = GetWorkWeekByIdInner(subject.WorkWeek.Id, context);

            if (workWeek == null)
            {
                throw new ArgumentOutOfRangeException(nameof(workWeek));
            }

            if (subject.Id != Guid.Empty)
            {
                subjectEntity = context.Subjects.First(x => x.Id == subject.Id).MapToEntity(subject, workWeek);
            }
            else
            {
                subjectEntity = new SubjectEntity().MapToEntity(subject, workWeek);
                subjectEntity.Id = Guid.NewGuid();
                context.Subjects.Add(subjectEntity);
            }

            var model = subjectEntity.MapToModel(workWeek.MapToModel());

            return model;
        }

        private Subject UpdateSubject(Subject subject, ScheduleContext context) //+
        {
            var workWeek = GetWorkWeekByIdInner(subject.WorkWeek.Id, context);
            var updateSubject = GetSubjectByIdInner(subject.Id, context);

            if (updateSubject == null)
            {
                throw new ArgumentOutOfRangeException(nameof(updateSubject));
            }

            context.Entry(updateSubject).CurrentValues.SetValues(subject);

            var model = updateSubject.MapToModel(workWeek.MapToModel());

            return model;
        }

        private bool RemoveSubject(Guid id, ScheduleContext context) //+
        {
            var removeSubject = GetSubjectByIdInner(id, context);

            if (removeSubject != null)
            {
                context.Subjects.Remove(removeSubject);
                return true;
            }

            return false;
        }

        private SubjectEntity GetSubjectByIdInner(Guid id, ScheduleContext context) //+
        {
            return context.Subjects.FirstOrDefault(x => x.Id == id);
        }

        //новая версия
        private Subject GetSubjectById(Guid id, ScheduleContext context) //+
        {
            var result = GetSubjectByIdInner(id, context);

            if (result == null)
            {
                throw new ArgumentOutOfRangeException(nameof(id));
            }

            return result.MapToModel(result.WorkWeek.MapToModel());
        }

        private bool RemoveWorkWeek(Guid id, ScheduleContext context) //+
        {
            var removWorkWeek = GetWorkWeekByIdInner(id, context);

            if (removWorkWeek != null)
            {
                var count = removWorkWeek.Subjects.Count;
                for (int i = 0; i < count; i++) //!!
                {
                    RemoveSubject(removWorkWeek.Subjects.ElementAt(0).MapToModel(removWorkWeek.MapToModel()).Id, context);
                }

                context.WorkWeeks.Remove(removWorkWeek);
                return true;
            }

            return false;
        }

        private bool RemoveDay(Guid id, Day day, ScheduleContext context)
        {
            var removWorkWeek = GetWorkWeekByIdInner(id, context);

            if (removWorkWeek != null)
            {
                var count = removWorkWeek.Subjects.Count;
                var removedCount = 0;

                for (int i = 0; i < count; i++)
                {
                    if (removWorkWeek.Subjects.ElementAt(i - removedCount).DayOfWeek == day)
                    {
                        RemoveSubject(removWorkWeek.Subjects.ElementAt(i - removedCount).MapToModel(removWorkWeek.MapToModel()).Id, context);
                        ++removedCount;
                    }
                }

                if (removWorkWeek.Subjects.Count == 0)
                {
                    RemoveWorkWeek(removWorkWeek.MapToModel().Id, context);
                }

                return true;
            }

            return false;
        }

        private WorkWeek GetWorkWeekById(Guid id, ScheduleContext context) //+
        {
            var result = GetWorkWeekByIdInner(id, context);

            if (result == null)
            {
                throw new ArgumentOutOfRangeException(nameof(id));
            }

            return result.MapToModel();
        }

        private WorkWeekEntity GetWorkWeekByIdInner(Guid id, ScheduleContext context) //+
        {
            return context.WorkWeeks.Include(nameof(WorkWeek.Subjects)).FirstOrDefault(x => x.Id == id);
        }

        private WorkWeek SaveWorkWeek(WorkWeek workWeek, ScheduleContext context) //+
        {
            WorkWeekEntity result;

            if (workWeek.Id != Guid.Empty)
            {
                result = context.WorkWeeks.First(x => x.Id == workWeek.Id).MapToEntity(workWeek);
            }
            else
            {
                result = new WorkWeekEntity().MapToEntity(workWeek);
                result.Id = Guid.NewGuid();
                context.WorkWeeks.Add(result);
            }

            return result.MapToModel();
        }
    }
}