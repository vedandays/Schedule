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
    public class WorkWeekDTO
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public ICollection<SubjectDTO> Subjects { get; set; } = new List<SubjectDTO>();

        public WorkWeekDTO MapFromModel(WorkWeek workWeek)
        {
            var subjects = workWeek.Subjects.Select(x => new SubjectDTO().MapFromModel(x)).ToList();
            Id = workWeek.Id;
            Description = workWeek.Description;
            Subjects = subjects;

            return this;
        }

        public WorkWeek MapToModel()
        {
            var workWeek = new WorkWeek(Description) { Id = this.Id };
            ((List<Subject>)workWeek.Subjects).AddRange(this.Subjects.Select(x => x.MapToModel(workWeek)));

            return workWeek;
        }
    }
}
