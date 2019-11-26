using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using MandiParishadWebApi.Models;
using System.Web.Http;

namespace MandiParishadWebApi.Models
{
    public class UserContext : DbContext
    {
        public UserContext() : base("MandiContext")
        {

        }
        public List<UserInbox> GetUsermail(Int64 Rid)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@Rid",Value=Rid}
                 };
            var sqlQuery = @"Sp_NewInboxMail @Rid";
            var res = this.Database.SqlQuery<UserInbox>(sqlQuery, sqlParam).ToList();
            return res;
        }
        public string MoveToTrash(Int64 MailId)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@mailid",Value=MailId}
                 };
            var sqlQuery = @"Sp_NewMovetoTrash @mailid";
            var res = this.Database.SqlQuery<string>(sqlQuery, sqlParam).FirstOrDefault();
            return res;
        }
        public string AllMailMoveToTrash(Int64 Rid)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@rid",Value=Rid}
                 };
            var sqlQuery = @"Sp_NewAllMailToTrash @rid";
            var res = this.Database.SqlQuery<string>(sqlQuery, sqlParam).FirstOrDefault();
            return res;
        }
    }
}