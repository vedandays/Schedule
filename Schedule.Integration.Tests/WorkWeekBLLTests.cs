using System;
using NUnit.Framework;
using Schedule.BLL.Implementations;
using Schedule.DAL;
using Schedule.Domain;

namespace Schedule.Integration.Tests
{
    [TestFixture]
    public class WorkWeekBLLTests
    {

        [Test]
        public void CreateWorkWeekTest()
        {
            //Arrange
            var repository = new Repository();
            var workWeekBLL = new WorkWeekBLL(repository);
            var subjectBll = new SubjectBLL(repository);
            
            //Act
            var workWeek = workWeekBLL.CreateWorkWeek("test");
            var subj1 = subjectBll.CreateNew("subj1", Day.Thursday, DateTime.Now, 1252, "qwerty", workWeek);
            var subj2 = subjectBll.CreateNew("subj2", Day.Wednesday, DateTime.Now, 1253, "asd", workWeek);
   
            //Assert
            var res = repository.GetWorkWeekById(workWeek.Id);
            var res1 = repository.GetSubjectById(subj1.Id);
            var res2 = repository.GetSubjectById(subj2.Id);
        }

        [Test]
        public void RemoveWorkWeekTest()
        {
            var repository = new Repository();
            var workWeekBLL = new WorkWeekBLL(repository);
            var subjectBll = new SubjectBLL(repository);

            var workWeek = workWeekBLL.CreateWorkWeek("test");
            var subj1 = subjectBll.CreateNew("subj1", Day.Thursday, DateTime.Now, 1250, "qwerty", workWeek);
            var subj2 = subjectBll.CreateNew("subj2", Day.Wednesday, DateTime.Now, 1251, "asd", workWeek);
            var subj3 = subjectBll.CreateNew("subj3", Day.Wednesday, DateTime.Now, 1251, "asd", workWeek);

            Assert.True(workWeekBLL.Remove(workWeek.Id));
            Assert.False(workWeekBLL.Remove(workWeek.Id));
        }

        [Test]
        public void RemoveDayTest()
        {
            var repository = new Repository();
            var workWeekBLL = new WorkWeekBLL(repository);
            var subjectBll = new SubjectBLL(repository);

            var workWeek = workWeekBLL.CreateWorkWeek("test");
            var workWeek2 = workWeekBLL.CreateWorkWeek("test2");
            var subj0 = subjectBll.CreateNew("subj0", Day.Wednesday, DateTime.Now, 1249, "jh", workWeek2);
            var subj1 = subjectBll.CreateNew("subj1", Day.Thursday, DateTime.Now, 1250, "qwerty", workWeek);
            var subj2 = subjectBll.CreateNew("subj2", Day.Wednesday, DateTime.Now, 1251, "asd", workWeek);
            var subj3 = subjectBll.CreateNew("subj3", Day.Wednesday, DateTime.Now, 1252, "sa", workWeek);

            Assert.True(workWeekBLL.RemoveDay(workWeek.Id, Day.Wednesday));
        }

        [Test]
        public void GetSubjectsWeekTest()
        {
            var repository = new Repository();
            var workWeekBLL = new WorkWeekBLL(repository);
            var subjectBll = new SubjectBLL(repository);

            var workWeek = workWeekBLL.CreateWorkWeek("test");
            var workWeek2 = workWeekBLL.CreateWorkWeek("test2");
            var subj0 = subjectBll.CreateNew("subj0", Day.Wednesday, DateTime.Now, 1249, "jh", workWeek2);
            var subj1 = subjectBll.CreateNew("subj1", Day.Thursday, DateTime.Now, 1250, "qwerty", workWeek);
            var subj2 = subjectBll.CreateNew("subj2", Day.Wednesday, DateTime.Now, 1251, "asd", workWeek);
            
            //сравнить списки
            var subjects = workWeekBLL.GetSubjectsWeek(workWeek.Id);
        }

        [Test]
        public void GetAllTest()
        {
            var repository = new Repository();
            var workWeekBLL = new WorkWeekBLL(repository);
            var subjectBll = new SubjectBLL(repository);

            var workWeek = workWeekBLL.CreateWorkWeek("test");
            var workWeek2 = workWeekBLL.CreateWorkWeek("test2");
            var subj0 = subjectBll.CreateNew("subj0", Day.Wednesday, DateTime.Now, 1249, "jh", workWeek2);
            var subj1 = subjectBll.CreateNew("subj1", Day.Thursday, DateTime.Now, 1250, "qwerty", workWeek);
            var subj2 = subjectBll.CreateNew("subj2", Day.Wednesday, DateTime.Now, 1251, "asd", workWeek);

            //сравнить списки
            var weeks = workWeekBLL.GetAll();
        }

    }
}
