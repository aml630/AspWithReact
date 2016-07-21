using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace React.Models
{
    public class CommentModel
    {
       
        [Key]
        public int CommentId { get; set; }
        public string Author { get; set; }
        public string Text { get; set; }
    }
}