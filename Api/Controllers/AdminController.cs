using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using MandiParishadWebApi.Filters;
using MandiParishadWebApi.Models;
namespace MandiParishadWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("Admin")]
    public class AdminController : ApiController
    {
        AdminContext da = new AdminContext();
        Common objCom = new Common();
        DisplayMessage displayMessage = new DisplayMessage();

        [Route("UserLogin")]
        public IHttpActionResult PostUserLogin(UserLogin mail)
        {
            AfterUserLogin data = da.UserLogin(mail.officeName);
            if (data != null)
            {
                if (data.Activeflag.ToString() == "A")
                {
                    string dbpas = objCom.SingleHashing(mail.Password);
                    if (dbpas == data.password)
                    {
                        displayMessage.Message = "Login successfull";
                        displayMessage.Type = "s";
                        return Ok(new { displayMessage, data.userName, data.userId });
                    }
                    else
                    {
                        HttpError myCustomError = new HttpError("Please Enter Valid Password") { { "Type", "w" } };
                        return Content(HttpStatusCode.BadRequest, myCustomError);
                    }
                }
                else
                {
                    HttpError myCustomError = new HttpError("Login Deactivated") { { "Type", "w" } };
                    return Content(HttpStatusCode.BadRequest, myCustomError);

                }
            }
            else
            {
                HttpError myCustomError = new HttpError("Please Enter Valid UserName") { { "Type", "w" } };
                return Content(HttpStatusCode.BadRequest, myCustomError);

            }
        }
        [Route("GroupMaster")]
        public IHttpActionResult GetGroup()
        {
            var data = da.M_GroupMaster.Where(k => k.isDeleted == false).ToList();
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
        [Route("AddUpdateGroupMaster")]
        public IHttpActionResult PostGroup(AddUpdateUserMaster groupMasterData)
        {
            var data = da.AddUpdateGroupName(groupMasterData.transId, groupMasterData.groupName, groupMasterData.userId);
            if (data.ToString() == "0")
            {
                return Ok("Success");
            }
            else
            {
                HttpError myCustomError = new HttpError("Not Inserted") { { "Type", "w" } };
                return Content(HttpStatusCode.BadRequest, myCustomError);
            }
        }
        [Route("DeleteGroupMaster/{id}")]
        public IHttpActionResult DeleteGroup([FromUri]int id)
        {
            var data = da.DeleteGroup(id);
            if (data.ToString() == "0")
            {
                return Ok("Success");
            }
            else
            {
                HttpError myCustomError = new HttpError("Not Deleted") { { "Type", "w" } };
                return Content(HttpStatusCode.BadRequest, myCustomError);
            }
        }
        [Route("GetUserBygroup/{groupId}")]
        public IHttpActionResult GetUserBygroup(int groupId)
        {
            var data = da.GetGroupUsers(groupId);
            if (data != null)

            {
                return Ok(data);
            }
            else
            {
                HttpError myCustomError = new HttpError("No User Found") { { "Type", "w" } };
                return Content(HttpStatusCode.BadRequest, myCustomError);
            }
        }
        [Route("ComposeMail")]
        public IHttpActionResult PostComposeMail(MailBox mailBox)
        {
            Object data = 0;
            Int64 Mailid = da.ComposeMail(mailBox.Priority, mailBox.SMS, mailBox.Subject, mailBox.Message);
            if (Mailid > 0)
            {
                foreach (var k in mailBox.Rid)
                {
                    data = da.ComposeMailInfo(Mailid, k.userId, mailBox.Sid);
                }
                if (Convert.ToInt32(data) > 0)
                {
                    data = "Mail Send";
                }
                return Ok(data);
            }
            else
            {
                HttpError myCustomError = new HttpError("Unsuccessfull") { { "Type", "w" } };
                return Content(HttpStatusCode.BadRequest, myCustomError);
            }
        }
    }
}
