using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using MandiParishadWebApi.Models;
namespace MandiParishadWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("User")]
    public class UserController : ApiController
    {
        UserContext da = new UserContext();
        /// <summary>
        /// Compose New Mail
        /// </summary>
        /// <param name="mail"></param>
        /// <returns></returns>
        //[Route("ComposeMail")]
        //public IHttpActionResult PostCompose(ComposeMail mail)
        //{
        //    ComposeMail data = da.Create(mail);
        //    if (data != null)
        //    {
        //        return Ok(data);
        //    }
        //    else
        //    {
        //        return BadRequest("Not Inserted");
        //    }
        //}
        /// <summary>
        /// All Mails
        /// </summary>
        /// <returns></returns>
        [Route("InboxMail/{Rid}")]
        public IHttpActionResult GetMail(Int64 Rid)
        {
            List<UserInbox> data = da.GetUsermail(Rid);
            if (data != null)
            {
                return Ok(data);
            }
            else
            {
                HttpError myCustomError = new HttpError("No Record Found") { { "Type", "w" } };
                return Content(HttpStatusCode.BadRequest, myCustomError);
            }
        }
    }
}
