using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Schedule.Domain;

namespace Schedule.DAL.Entities
{
    [Table("Subject")]
    public class SubjectEntity
    {
        [Key]
        public virtual Guid Id { get; set; }
        public virtual string Name { get; set; }
        public virtual Day DayOfWeek { get; set; }
        public virtual DateTime Time { get; set; }
        public virtual int AudienceNumber { get; set; }
        public virtual string FullName { get; set; }
        public virtual WorkWeekEntity WorkWeek { get; set; }

        public SubjectEntity MapToEntity(Subject subject, WorkWeekEntity workWeek)
        {
            Id = subject.Id;
            Name = subject.Name;
            DayOfWeek = subject.DayOfWeek;
            Time = subject.Time;
            AudienceNumber = subject.AudienceNumber;
            FullName = subject.FullName;
            WorkWeek = workWeek;

            return this;
        }

        public Subject MapToModel(WorkWeek workWeek)
        {
            var subject = new Subject(Name, DayOfWeek, Time, AudienceNumber, FullName) {Id = this.Id};
            subject.WorkWeek = workWeek;

            return subject;
        }
    }
}
