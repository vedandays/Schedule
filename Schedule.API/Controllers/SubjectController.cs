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
    public class SubjectController : ApiController
    {
        protected internal Repository repository;
        protected internal ISubjectBLL subjectBll;

        public SubjectController()
        {
            repository = new Repository();
            subjectBll = new SubjectBLL(repository);
        }

        public HttpResponseMessage Get(Guid id) //+
        {
            return Request.CreateResponse(new SubjectDTO().MapFromModel(subjectBll.GetSubjectById(id)));
        }

        public HttpResponseMessage Delete(Guid id) //+
        {
            return Request.CreateResponse(subjectBll.RemoveSubject(id));
        }

        public void Post([FromBody] JObject jsonResult)//+
        {
            var subjectDto = JsonConvert.DeserializeObject<SubjectDTO>(jsonResult.ToString());
            subjectBll.CreateNew(subjectDto.Name, subjectDto.DayOfWeek, subjectDto.Time, subjectDto.AudienceNumber,
                subjectDto.FullName, subjectDto.WorkWeek);
        }

        public void Put(Guid id, [FromBody] JObject value)//+
        {
            var destDto = JsonConvert.DeserializeObject<SubjectDTO>(value.ToString());
            var dest = destDto.MapToModel(destDto.WorkWeek);
            var source = subjectBll.GetSubjectById(id);

            if (source != null)
            {
                subjectBll.ChangeSubjectInfo(source, dest);
            }
        }

    }
}