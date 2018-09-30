using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using Schedule.BLL.Contracts;
using Schedule.BLL.Implementations;
using Schedule.DAL;
using Schedule.Domain;

namespace Schedule.BLL.Tests
{
    [TestFixture]
    class SubjectBLLTests
    {
        [Test]
        public void CreateSubjectTest()
        {
            //Arrange
            var repository = new Mock<IRepository>();


            var subjectBll = new SubjectBLL(repository.Object);
            var workWeekBLL = new Mock<IWorkWeekBLL>();
            workWeekBLL.Setup(w => w.CreateWorkWeek("test"))
                .Returns(ForMockWorkWeek());

            var workWeek = workWeekBLL.Object.CreateWorkWeek("test");

            //repository.Setup(x => x.Save()).Returns()

            // var subject = new Subject("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A. V.");
            //subject.WorkWeek = workWeek;

            //Act
            //var subjectTest = subjectBll.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A. V.", workWeek);

            Assert.Throws<ArgumentOutOfRangeException>(() =>
                subjectBll.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A. V.", workWeek));

            //Assert
            //var res = repository.Object.GetWorkWeekById(workWeek.Id);
        }

        private WorkWeek ForMockWorkWeek()
        {
            var workWeek = new WorkWeek("test");
            workWeek.Id = Guid.NewGuid();
            return workWeek;
        }

        [Test]
        public void GetSubjectTest()
        {
            var repository = new Mock<IRepository>();
            var subjectBll = new SubjectBLL(repository.Object);
            new Action(() => subjectBll.GetSubjectById(new Guid())).Should().Throw<ArgumentOutOfRangeException>();
        }
    }
}