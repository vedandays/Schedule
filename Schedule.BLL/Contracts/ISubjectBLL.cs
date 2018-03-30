using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule.Domain;

namespace Schedule.BLL.Contracts
{
    public interface ISubjectBLL
    {
        Subject CreateNew(string name, Day dayOfWeek, DateTime time, int audienceNumber, string fullNameTeacher, WorkWeek workWeek);
        void ChangeName(Subject source, string dest);
        void ChangeDay(Subject source, Day dest);
        void ChangeTime(Subject source, DateTime dest);
        void ChangeAudienceNumber(Subject source, int dest);
        void ChangeTeacherName(Subject source, string dest);
        void RemoveSubject(Subject subject);
        Subject GetSubjectById(Guid id);
        //ICollection<Subject> GetSubjectsByDay(Day workDay);
        //ICollection<Subject> GetAllSubjects(Guid weekId);
    }
}