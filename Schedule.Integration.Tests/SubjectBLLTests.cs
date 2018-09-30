using System;
using NUnit.Framework;
using Schedule.BLL.Implementations;
using Schedule.DAL;
using Schedule.Domain;

namespace Schedule.Integration.Tests
{
    [TestFixture]
    public class SubjectBLLTests
    {
        [Test]
        public void CreateSubjectTest()
        {
            //Arrange
            var repository = new Repository();

            var subjectBll = new SubjectBLL(repository);

            var workWeekBLL = new WorkWeekBLL(repository);

            var workWeek = workWeekBLL.CreateWorkWeek("test");
            
            //Act
            var subject = subjectBll.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A. V.", workWeek);

            //Assert
            var res = repository.GetWorkWeekById(workWeek.Id);
        }

        [Test]
        public void ChangeSubjectTest()
        {
            var repository = new Repository();
            var subjectBLL = new SubjectBLL(repository);

            var workWeekBLL = new WorkWeekBLL(repository);
            var workWeek = workWeekBLL.CreateWorkWeek("test 1");

            var source = subjectBLL.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A.V.", workWeek);
            var dest = new Subject("NewTestName", Day.Wednesday, DateTime.Now, 1248, "Ivanov A.V.");
            subjectBLL.ChangeSubjectInfo(source, dest);

            var res = repository.GetWorkWeekById(workWeek.Id);
        }

        [Test]
        public void RemoveSubjectTest()
        {
            var repository = new Repository();
            var subjectBLL = new SubjectBLL(repository);

            var workWeekBLL = new WorkWeekBLL(repository);
            var workWeek = workWeekBLL.CreateWorkWeek("test 1");
            var source = subjectBLL.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A.V.", workWeek);

            Assert.True(subjectBLL.RemoveSubject(source.Id));
            Assert.False(subjectBLL.RemoveSubject(source.Id));
        }

        [Test]
        public void GetSubjectByIdTest_Throw_ArgumentOutOfRangeException()
        {
            var repository = new Repository();
            var workWeek = new WorkWeekBLL(repository).CreateWorkWeek("test1");
            var subjectBLL = new SubjectBLL(repository);
            var source = subjectBLL.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A.V.", workWeek);

            subjectBLL.RemoveSubject(source.Id);

            Assert.Throws<ArgumentOutOfRangeException>(() => subjectBLL.GetSubjectById(source.Id));
        }

        [TearDown]
        public void Clean()
        {

        }
    }
}