using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MandiParishadWebApi.Models
{
    public class UserInbox
    {
        public Int64 MailId { get; set; }
        public int Priority { get; set; }
        public bool? SMS { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTime PostDate { get; set; }
        public Int64 Rid { get; set; }
        public Int64 userId { get; set; }
        public string userName { get; set; }

    }
}