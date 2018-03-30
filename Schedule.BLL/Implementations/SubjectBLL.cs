using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule.BLL.Contracts;
using Schedule.DAL;
using Schedule.Domain;

namespace Schedule.BLL.Implementations
{
    public class SubjectBLL : ISubjectBLL
    {
        private readonly IRepository repository;

        public SubjectBLL(IRepository repository)
        {
            this.repository = repository;
        }

        public Subject CreateNew(string name, Day dayOfWeek, DateTime time, int audienceNumber, string fullNameTeacher, WorkWeek workWeek)
        {
            var newSubject = new Subject(name, dayOfWeek, time, audienceNumber, fullNameTeacher);
            newSubject.WorkWeek = workWeek;

            return repository.Save(newSubject);
        }

        public void ChangeName(Subject source, string dest)
        {
            source.Name = dest;
            repository.Save(source);
        }

        public void ChangeDay(Subject source, Day dest)
        {
            source.DayOfWeek = dest;
            repository.Save(source);
        }

        public void ChangeTime(Subject source, DateTime dest)
        {
            source.Time = dest;
            repository.Save(source);
        }

        public void ChangeAudienceNumber(Subject source, int dest)
        {
            source.AudienceNumber = dest;
            repository.Save(source);
        }

        public void ChangeTeacherName(Subject source, string dest)
        {
            source.FullName = dest;
            repository.Save(source);
        }

        public void RemoveSubject(Subject subject)
        {
            repository.Remove(subject);
        }

        public Subject GetSubjectById(Guid id)
        {
            return repository.GetSubjectById(id);
        }

        //public ICollection<Subject> GetSubjectsByDay(Day workDay)
        //{
        //    return repository.GetSubjectsByDay(workDay);
        //}

        //public ICollection<Subject> GetAllSubjects(Guid weekId)
        //{
        //    return repository.GetAllSubjects(weekId);
        //}
    }
}
