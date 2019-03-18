using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Domain
{
    public class UserBase : IUserAuthData
    {
        public int Id
        {
            get;set;
        }

        public string Email
        {
            get; set;
        }

        public string FirstName
        {
            get; set;
        }

        public string LastName
        {
            get; set;
        }

        public IEnumerable<string> Roles
        {
            get; set;
        }
    }
}
