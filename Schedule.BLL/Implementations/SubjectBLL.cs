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

        public Subject CreateNew(string name, Day dayOfWeek, DateTime time, int audienceNumber, string fullNameTeacher,
            WorkWeek workWeek) //+
        {
            var newSubject = new Subject(name, dayOfWeek, time, audienceNumber, fullNameTeacher);
            newSubject.WorkWeek = workWeek;

            return repository.Save(newSubject);
        }

        public Subject ChangeSubjectInfo(Subject source, Subject dest) //+
        {
            source.Name = dest.Name;
            source.DayOfWeek = dest.DayOfWeek;
            source.Time = dest.Time;
            source.AudienceNumber = dest.AudienceNumber;
            source.FullName = dest.FullName;

            return repository.Update(source);
        }

        public bool RemoveSubject(Guid id) //+
        {
            return repository.RemoveSubject(id);
        }

        //изменено
        public Subject GetSubjectById(Guid id) //++
        {
            var subject = repository.GetSubjectById(id);
            if (subject == null)
            {
               throw new ArgumentOutOfRangeException(nameof(subject));
            }

            return subject;
        }
    }
}