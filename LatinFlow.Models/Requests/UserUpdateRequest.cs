using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models.Request
{
    public class UserUpdateRequest : UserAddRequest
    {
        public int Id { get; set; }
    }
}
