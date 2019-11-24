using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MandiParishadWebApi.Models
{
    public class DisplayMessage
    {
        public string Message { get; set; }
        public string Type { get; set; }
    }
    public class UserLogin
    {
        public string officeName { get; set; }
        public string Password { get; set; }
    }
    public class AfterUserLogin
    {
        public Int64 userId { get; set; }
        public string userName { get; set; }
        public int groupID { get; set; }
        public DateTime LastLogin { get; set; }
        public string password { get; set; }
        public string Activeflag { get; set; }
    }
    public class M_GroupMaster
    {
        [Key]
        public int groupId { get; set; }
        public string groupName { get; set; }
        public bool? isDeleted { get; set; }
        public DateTime transDate { get; set; }
        public int userId { get; set; }
        public int GroupOrder { get; set; }

    }
    public class AddUpdateUserMaster
    {
        public string groupName { get; set; }
        public int userId { get; set; }
        public int transId { get; set; }

        
    }
    public class AddUser
    {
        public string userName { get; set; }
        public string password { get; set; }
        public string mobileNo { get; set; }
        public int groupID { get; set; }
        public string recflag { get; set; }


    }
    public class UserByGroup
    {

        public Int64 userId { get; set; }
        public string userName { get; set; }
        public int groupID { get; set; }
        public string groupName { get; set; }
        public string MobileNo { get; set; }


    }
    public class MailBox
    {
        public Int64 MailId { get; set; }
        public Int64 Sid { get; set; }
        public List<Receiver> Rid { get; set; }
        public int Priority { get; set; }
        public bool? SMS { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTime PostDate { get; set; } = DateTime.Now;
        public bool? IsViewed { get; set; } = false;
        public bool? IsArchived { get; set; } = false;
        public bool? IsImportant { get; set; } = false;
        public bool? IsDraft { get; set; } = false;
        public bool? IsTrash { get; set; } = false;
    }
    public class Receiver
    {
        public string isDisabled { get; set; }
        public string userName { get; set; }
        public int userId { get; set; }

        
    }
}