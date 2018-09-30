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
        Subject CreateNew(string name, Day dayOfWeek, DateTime time, int audienceNumber, string fullNameTeacher,
            WorkWeek workWeek);//+

        Subject ChangeSubjectInfo(Subject source, Subject dest);//+

        //bool RemoveSubject(Subject subject);//+
        bool RemoveSubject(Guid id);//+

        Subject GetSubjectById(Guid id);//+
    }
}