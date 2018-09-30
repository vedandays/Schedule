using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule.DAL.Entities;

namespace Schedule.DAL
{
    internal class ScheduleContext : DbContext
    {
        public ScheduleContext() : base("ScheduleContextConnectionString")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<ScheduleContext>());
        }

        public DbSet<SubjectEntity> Subjects { get; set; }
        public DbSet<WorkWeekEntity> WorkWeeks { get; set; }
    }
}
