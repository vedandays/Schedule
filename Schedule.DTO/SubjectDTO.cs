using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using Schedule.Domain;

namespace Schedule.DTO
{
    [DataContract]
    public class SubjectDTO
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public Day DayOfWeek { get; set; }

        [DataMember]
        public DateTime Time { get; set; }

        [DataMember]
        public int AudienceNumber { get; set; }

        [DataMember]
        public string FullName { get; set; }


        [DataMember]
        public WorkWeek WorkWeek { get; set; }


        public ICollection<SubjectDTO> MapFromModelAll(ICollection<Subject> subjects)
        {
            ICollection <SubjectDTO> allSubjects = new List<SubjectDTO>();
            foreach (var subject in subjects)
            {
                allSubjects.Add(MapFromModel(subject));
            }

            return allSubjects;
        }

        public SubjectDTO MapFromModel(Subject subject)
        {
            Id = subject.Id;
            Name = subject.Name;
            DayOfWeek = subject.DayOfWeek;
            Time = subject.Time;
            AudienceNumber = subject.AudienceNumber;
            FullName = subject.FullName;

            return this;
        }

        public Subject MapToModel(WorkWeek workWeek)
        {
            var subject = new Subject(Name, DayOfWeek, Time, AudienceNumber, FullName) { Id = this.Id };
            subject.WorkWeek = workWeek;

            return subject;
        }
    }
}
