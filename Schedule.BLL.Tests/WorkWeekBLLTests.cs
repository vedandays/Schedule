using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Moq;
using NUnit.Framework;
using Schedule.BLL.Contracts;
using Schedule.BLL.Implementations;
using Schedule.DAL;
using Schedule.Domain;

namespace Schedule.BLL.Tests
{
    [TestFixture]
    public class WorkWeekBLLTests
    {
        [Test]
        public void CreateWorkWeekInvoke()
        {
            //Arrange

            var repository = new Mock<IRepository>();
            var bll = new WorkWeekBLL(repository.Object);

            //Act, Assert
            new Action(() => bll.CreateWorkWeek("test")).Invoke();
        }

        //доделать
        [Test]
        public void RemoveWorkWeekTrue()
        {
            var repository = new Mock<IRepository>();
            var subjectBll = new Mock<ISubjectBLL>();
            var workWeekBllM = new Mock<IWorkWeekBLL>();
            var res = new WorkWeek("test");
            workWeekBllM.Setup(workWeekBll => workWeekBll.CreateWorkWeek("test")).Returns(res);
            var workWeek = workWeekBllM.Object.CreateWorkWeek("test");

            Assert.False(workWeekBllM.Object.Remove(workWeek.Id));
        }
    }
}