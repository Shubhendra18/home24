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
    }
}