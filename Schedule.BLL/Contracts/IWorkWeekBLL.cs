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
        WorkWeek CreateWorkWeek(string description);//+

        WorkWeek GetWorkWeekById(Guid id);//+

        bool Remove(Guid id);//++ //удалить неделю

        bool RemoveDay(Guid id, Day day);//++

        ICollection<Subject> GetSubjectsWeek(Guid weekId);//+ //получить все предметы недели

        ICollection<WorkWeek> GetAll();//++ //получить все недели

    }
}
