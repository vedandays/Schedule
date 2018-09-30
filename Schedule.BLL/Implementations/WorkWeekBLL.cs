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
    public class WorkWeekBLL : IWorkWeekBLL
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

        public WorkWeek CreateWorkWeek(WorkWeek workWeek)
        {
            //var newWorkWeek = new WorkWeek(description);
            return repository.Save(workWeek);
        }

        public WorkWeek GetWorkWeekById(Guid id)
        {
            return repository.GetWorkWeekById(id);
        }

        public bool Remove(Guid id)
        {
            return repository.RemoveWorkWeek(id);
        }

        public bool RemoveDay(Guid id, Day day)
        {
            return repository.RemoveDay(id, day);
        }

        public ICollection<Subject> GetSubjectsWeek(Guid weekId)
        {
            return repository.GetWorkWeekById(weekId).Subjects;
        }

        public ICollection<WorkWeek> GetAll()
        {
            return repository.GetAllWorkWeeks();
        }

    }
}
