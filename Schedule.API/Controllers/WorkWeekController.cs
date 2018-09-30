using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Schedule.BLL.Contracts;
using Schedule.BLL.Implementations;
using Schedule.DAL;
using Schedule.Domain;
using Schedule.DTO;

namespace Schedule.API.Controllers
{
    public class WorkWeekController : ApiController
    {
        protected internal IWorkWeekBLL workWeekBLL;
        protected internal Repository repository;

        public WorkWeekController()
        {
            repository = new Repository();
            this.workWeekBLL = new WorkWeekBLL(repository);
        }

        [ActionName("DefaulAction")]
        public HttpResponseMessage Get() //+
        {
            return Request.CreateResponse(workWeekBLL.GetAll().Select(x => new WorkWeekDTO().MapFromModel(x))
                .ToArray());
        }

        [ActionName("Subjects")]
        public HttpResponseMessage GetSubjects(Guid id) //+
        {
            return Request.CreateResponse(workWeekBLL.GetSubjectsWeek(id)
                .Select(x =>
                    new SubjectDTO().MapFromModel(x)));
        }

        [ActionName("DefaulAction")]
        public HttpResponseMessage GetWorkWekkById(Guid id) //+
        {
            return Request.CreateResponse(new WorkWeekDTO().MapFromModel(workWeekBLL.GetWorkWeekById(id)));
        }

        [ActionName("DefaulAction")]
        public HttpResponseMessage Delete(Guid id) //+
        {
            return Request.CreateResponse(workWeekBLL.Remove(id));
        }

        [ActionName("DefaulAction")]
        public HttpResponseMessage DeleteDay(Guid id, Day day) //+
        {
            return Request.CreateResponse(workWeekBLL.RemoveDay(id, day));
        }

        // POST api/values
        public JObject Post([FromBody] JObject jsonResult) //+
        {
            WorkWeekDTO workWeekDto = JsonConvert.DeserializeObject<WorkWeekDTO>(jsonResult.ToString());
            WorkWeek workWeek = workWeekDto.MapToModel();
            WorkWeekBLL workWeekBll = new WorkWeekBLL(repository);

            workWeekBll.CreateWorkWeek(workWeek);

            return jsonResult;
        }
    }
}