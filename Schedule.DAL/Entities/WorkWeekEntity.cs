using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Schedule.Domain;

namespace Schedule.DAL.Entities
{
    [Table("WorkWeeks")]
    public class WorkWeekEntity
    {
        [Key] public virtual Guid Id { get; set; }
        public ICollection<SubjectEntity> Subjects { get; set; } = new List<SubjectEntity>();
        public virtual string Description { get; set; }

        public WorkWeekEntity MapToEntity(WorkWeek workWeek)
        {
            Id = workWeek.Id;
            Description = workWeek.Description;

            return this;
        }

        public WorkWeek MapToModel()
        {
            var workWeek = new WorkWeek(Description) {Id = this.Id};
            ((List<Subject>) workWeek.Subjects).AddRange(this.Subjects.Select(x => x.MapToModel(workWeek)));

            return workWeek;
        }
    }
}