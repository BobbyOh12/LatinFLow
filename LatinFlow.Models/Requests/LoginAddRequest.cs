using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Requests
{
    public class LoginAddRequest : LoginUpdateRequest
    {
        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [MaxLength(1)]
        [Display(Name ="Middle Initial")]
        public string MiddleInitial { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
