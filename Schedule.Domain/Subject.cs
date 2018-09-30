using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schedule.Domain
{
    public class Subject
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Day DayOfWeek { get; set; }
        public DateTime Time { get; set; }
        public int AudienceNumber { get; set; }
        public string FullName { get; set; }
        public WorkWeek WorkWeek { get; set; }

        public Subject(string name, Day dayOfWeek, DateTime time, int audienceNumber, string fullName)
        {
            Name = name;
            DayOfWeek = dayOfWeek;
            Time = time;
            AudienceNumber = audienceNumber;
            FullName = fullName;
        }
    }
}