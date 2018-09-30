using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule.Domain;

namespace Schedule.DAL
{
    public interface IRepository
    {
        Subject Save(Subject subject);//+

        Subject Update(Subject subject);//+

        WorkWeek Save(WorkWeek workWeek);//+

        bool RemoveSubject(Guid id);//+

        bool RemoveWorkWeek(Guid id);//+

        bool RemoveDay(Guid id, Day day);//+

        Subject GetSubjectById(Guid id);//+

        WorkWeek GetWorkWeekById(Guid id);//+

        ICollection<WorkWeek> GetAllWorkWeeks();
    }
}