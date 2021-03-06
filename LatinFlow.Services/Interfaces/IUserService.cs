using LatinFlow.Models;
using LatinFlow.Models.Domain;
using LatinFlow.Models.Request;
using LatinFlow.Models.Requests;
using System.Collections.Generic;

namespace LatinFlow.Services
{
    public interface IUserService
    {
        int Create(LoginAddRequest userModel);
        IUserAuthData LogIn(string email, string password);
        bool LogInTest(string email, string password, int id, string[] roles = null);
        int Insert(UserAddRequest model);
        List<UserDomain> SelectAll();
        UserDomain SelectById(int id);
        UserDomain SelectByEmail(string email);
        LoginDomain SelectLoginByEmail(string email);
        void Update(UserUpdateRequest model);
        void Delete(int id);
    }
}
