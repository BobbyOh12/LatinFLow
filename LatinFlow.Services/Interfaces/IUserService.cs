using LatinFlow.Models.Domain;
using LatinFlow.Models.Request;
using System.Collections.Generic;

namespace LatinFlow.Services
{
    public interface IUserService
    {
        int Create(object userModel);
        bool LogIn(string email, string password);
        bool LogInTest(string email, string password, int id, string[] roles = null);
        int Insert(UserAddRequest model);
        List<UserDomain> SelectAll();
        UserDomain SelectById(int id);
        void Update(UserUpdateRequest model);
        void Delete(int id);
    }
}
