using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MandiParishadWebApi.Models
{
    public class ComposeMail
    {
        [Key]
        [Display(AutoGenerateField =false)]
        public int Id { get; set; }
        public int Priority { get; set; }
        public bool SMSAlert { get; set; }
        public string ToUser { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }



    }
}