using System;
using System.Collections;
using System.Collections.Generic;
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
        public void CreateSubjectTest() //+
        {
            // given
            var repository = new Repository();
            var subjectBll = new SubjectBLL(repository);
            var workWeekBll = new WorkWeekBLL(repository);
            var workWeek = workWeekBll.CreateWorkWeek("test");
            var subject = subjectBll.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Ivanov A. V.", workWeek);
            workWeek.Subjects.Add(subject);
            var workWeek2 = workWeekBll.CreateWorkWeek("test2");
            
            // whenд
            var res = repository.GetWorkWeekById(workWeek.Id);
            
            // then
            Assert.AreEqual(workWeek.Id, res.Id);
            var resSubjects = res.Subjects;
            var workWeekSubject = new List<Subject>(workWeek.Subjects)[0];
            var resSubject = new List<Subject>(resSubjects)[0];
            Assert.AreEqual(res.Id, workWeek.Id);
            Assert.AreNotEqual(res.Id, workWeek2.Id);
            Assert.AreEqual(resSubject.Id, workWeekSubject.Id);
            Assert.AreEqual(resSubject.Name, workWeekSubject.Name);
            Assert.AreEqual(resSubject.AudienceNumber, workWeekSubject.AudienceNumber);
            Assert.AreEqual(resSubject.FullName, workWeekSubject.FullName);
            Assert.AreEqual(resSubject.WorkWeek.Id, workWeekSubject.WorkWeek.Id);
            Assert.AreEqual(resSubject.DayOfWeek, workWeekSubject.DayOfWeek);
    
        }

        [Test]
        public void ChangeSubjectTest() //+
        {
            // given
            var repository = new Repository();
            var subjectBll = new SubjectBLL(repository);
            var workWeekBll = new WorkWeekBLL(repository);
            var workWeek = workWeekBll.CreateWorkWeek("test");

            var source = subjectBll.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Ivanov A. V.", workWeek);
            var dest = new Subject("NewTestName", Day.Wednesday, DateTime.Now, 1248, "Ivanov A.V.");
            subjectBll.ChangeSubjectInfo(source, dest);

            // when
            var res = repository.GetWorkWeekById(workWeek.Id);
            var collection = res.Subjects;

            var resSubject = new List<Subject>(collection)[0];
            // then
            var resSubjects = collection;
            Assert.AreEqual(resSubject.Name, source.Name);
            Assert.AreEqual(resSubject.FullName, source.FullName);
            Assert.AreEqual(resSubject.WorkWeek.Id, source.WorkWeek.Id);
            Assert.AreEqual(resSubject.DayOfWeek, source.DayOfWeek);
            Assert.AreEqual(resSubject.AudienceNumber, dest.AudienceNumber);
        }

        [Test]
        public void RemoveSubjectTest()
        {
            // given
            var repository = new Repository();
            var subjectBLL = new SubjectBLL(repository);

            var workWeekBLL = new WorkWeekBLL(repository);
            var workWeek = workWeekBLL.CreateWorkWeek("test 1");
            var source = subjectBLL.CreateNew("testName", Day.Monday, DateTime.Now, 1234, "Vedenin A.V.", workWeek);


            Assert.True(subjectBLL.RemoveSubject(source.Id));
            Assert.False(subjectBLL.RemoveSubject(source.Id));
            
            var res = repository.GetWorkWeekById(workWeek.Id);
            Assert.AreEqual(0, res.Subjects.Count);
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