using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schedule.Domain
{
    public class WorkWeek
    {
        public Guid Id { get; set; }
        public ICollection<Subject> Subjects { get; } = new List<Subject>();
        public string Description { get; }

        public WorkWeek(string description)
        {
            Description = description;
        }
    }
}
