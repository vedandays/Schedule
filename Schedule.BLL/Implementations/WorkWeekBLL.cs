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
    class WorkWeekBLL : IWorkWeekBLL
    {
        private readonly IRepository repository;

        public WorkWeekBLL(IRepository repository)
        {
            this.repository = repository;
        }

        public WorkWeek CreateWorkWeek(string description)
        {
            var newWorkWeek = new WorkWeek(description);
            return repository.Save(newWorkWeek);
        }

        public void RemoveDay(Day day)
        {
            repository.RemoveDay(day);
        }

        public ICollection<Subject> GetSubjectsByDay(Day workDay)
        {
            return repository.GetSubjectsByDay(workDay);
        }

        public ICollection<Subject> GetAllSubjects(Guid weekId)
        {
            return repository.GetAllSubjects(weekId);
        }
    }
}
