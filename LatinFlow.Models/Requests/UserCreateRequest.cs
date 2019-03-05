using LatinFlow.Models.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Requests
{
    public class UserCreateRequest : UserAddRequest
    {
        public string Salt { get; set; }
        public string PasswordHash { get; set; }
        public string Password { get; set; }
    }
}
