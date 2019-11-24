using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using MandiParishadWebApi.Filters;
using MandiParishadWebApi.Models;
namespace MandiParishadWebApi.Models
{
    public class AdminContext : DbContext
    {
        public AdminContext() : base("MandiContext")
        {

        }
        public DbSet<M_GroupMaster> M_GroupMaster { get; set; }
        public AfterUserLogin UserLogin(string officeName)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@userName",Value=officeName},
                new SqlParameter {ParameterName="@LastLoginIP",Value=Common.GetIPAddress()},

                 };
            var sqlQuery = @"Proc_userLogin_selectLogin @userName,@LastLoginIP";
            var res = this.Database.SqlQuery<AfterUserLogin>(sqlQuery, sqlParam).FirstOrDefault();
            return res;
        }
        public object AddUpdateGroupName(int transId, String GroupName, int UserId)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@transId",Value=transId},
                new SqlParameter {ParameterName="@groupName",Value=GroupName},
                new SqlParameter {ParameterName="@userId",Value=UserId},
                 };
            var sqlQuery = @"sp_saveUpdateGroup @transId,@groupName,@userId";
            var res = this.Database.SqlQuery<object>(sqlQuery, sqlParam).Count();
            return res;
        }
        public object DeleteGroup(int groupId)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@transId",Value=groupId},
                 };
            var sqlQuery = @"sp_deleteGroup @transId";
            var res = this.Database.SqlQuery<object>(sqlQuery, sqlParam).Count();
            return res;
        }
        public List<UserByGroup> GetGroupUsers(int groupID)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@groupID",Value=groupID}
                 };
            var sqlQuery = @"Proc_selectUser @groupID";
            var res = this.Database.SqlQuery<UserByGroup>(sqlQuery, sqlParam).ToList();
            return res;
        }
        public Int64 ComposeMail(int Priority, bool? SMS, string Subject, string Message)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@priority",Value=Priority},
                new SqlParameter {ParameterName="@sms",Value=SMS} ,
                new SqlParameter {ParameterName="@sub",Value=Subject} ,
                new SqlParameter {ParameterName="@msg",Value=Message}
                 };
            var sqlQuery = @"Sp_NewComposeMail @priority,@sms,@sub,@msg";
            Int64 mailid = this.Database.SqlQuery<Int64>(sqlQuery, sqlParam).FirstOrDefault();
            return mailid;
        }
        public object ComposeMailInfo(Int64? MailId, Int64? Rid, Int64? Sid)
        {
            var sqlParam = new SqlParameter[] {
                new SqlParameter {ParameterName="@mailid",Value=MailId},
                new SqlParameter {ParameterName="@rid",Value=Rid} ,
                new SqlParameter {ParameterName="@sid",Value=Sid}
                 };
            var sqlQuery = @"Sp_NewMailInfo @mailid,@rid,@sid";
            var res = this.Database.SqlQuery<object>(sqlQuery, sqlParam).Count();
            return res;
        }
    }
}