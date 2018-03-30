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
        Subject Save(Subject subject);
        WorkWeek Save(WorkWeek workWeek);
        void Remove(Subject subject);
        //void Remove(WorkWeek workWeek);//вроде не надо
        void RemoveDay(Day day);
        Subject GetSubjectById(Guid id);
        ICollection<Subject> GetSubjectsByDay(Day workDay);
        ICollection<Subject> GetAllSubjects(Guid weekId);
    }
}
