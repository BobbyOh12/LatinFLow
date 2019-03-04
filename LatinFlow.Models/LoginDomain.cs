using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models
{
    public class LoginDomain
    {
        public string Email { get; set; }
        public string Salt { get; set; }
        public string PasswordHash { get; set; }
        public int RelatedUserId { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
