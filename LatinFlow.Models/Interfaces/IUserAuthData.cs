using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Models
{
    public interface IUserAuthData
    {
        int Id { get; }
        string Email { get; }
        string FirstName { get; }
        string LastName { get; }
        IEnumerable<string> Roles { get; }
    }
}
