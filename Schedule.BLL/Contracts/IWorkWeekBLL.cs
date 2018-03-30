using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule.Domain;

namespace Schedule.BLL.Contracts
{
    public interface IWorkWeekBLL
    {
        WorkWeek CreateWorkWeek(string description);
        void RemoveDay(Day day);
        ICollection<Subject> GetSubjectsByDay(Day workDay);
        ICollection<Subject> GetAllSubjects(Guid weekId); //получить все предметы недели

    }
}
