using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Request
{
    public class UserEmailAddRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
