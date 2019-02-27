using System;
using System.Collections.Generic;
using LatinFlow.Data;
using LatinFlow.Data.Providers;
using LatinFlow.Models.Domain;
using LatinFlow.Models.Request;
using LatinFlow.Services;
using LatinFlow.Services.Cryptography;
using LatinFlow.Web.Core.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LatinFlow.Test
{
    [TestClass]
    public class UserUnitTest
    {

    private IUserService _svc;

    [TestInitialize]
    public void setup()
    {
        string connectionString = "" +
            "Data Source=mydbinstance.c6r0k7uwj2s9.us-west-1.rds.amazonaws.com,1433;" +
            "Initial Catalog=LatinFlow;" +
            "User Id =BobbyOh;" +
            "Password=1ongbeach";
        IAuthenticationService _authenticationService = new OwinAuthenticationService();
        ICryptographyService _cryptographyService = new Base64StringCryptographyService();
        IDataProvider _dataProvider = new SqlDataProvider(connectionString);
        _svc = new UserService(_authenticationService, _cryptographyService, _dataProvider);
    }

        [TestMethod]
        public void Insert_Test()
        {
            UserAddRequest model = new UserAddRequest
            {
                FirstName = "Ronald",
                MiddleInitial = "J",
                LastName = "McDonald",
                Email = "email",
                ModifiedBy = "me"
            };
            int result = _svc.Insert(model);

            Assert.IsTrue(result > 0, "The insert failed!");
        }

        [TestMethod]
        public void SelectAll_Test()
        {
            List<UserDomain> result = _svc.SelectAll();

            Assert.IsTrue(result.Count > 0, "Select all has failed!");
        }

        [TestMethod]
        public void SelectById_Test()
        {
            int id = 5;
            UserDomain result = _svc.SelectById(id);

            Assert.IsInstanceOfType(result, typeof(UserDomain), "result was of wrong type");
            Assert.IsNotNull(result, "No record exists with the requested id`");
            Assert.IsTrue(result.Id == id, "Select by id has failed!");
        }

        [TestMethod]
        public void Update_Test()
        {

            UserAddRequest model = new UserAddRequest
            {
                FirstName = "First Name",
                MiddleInitial = "M",
                LastName = "Last Name",
                Email = "Some Email",
                ModifiedBy = "Unit Test"
            };
            int id = _svc.Insert(model);

            UserUpdateRequest updateModel = new UserUpdateRequest
            {
                Id = id,
                FirstName = "Update First",
                MiddleInitial = "L",
                LastName = "Update Last",
                Email = "Update Email",
                ModifiedBy = "Update Unit Test"
            };

            UserDomain model1 = _svc.SelectById(id);

            _svc.Update(updateModel);

            UserDomain model2 = _svc.SelectById(id);

            Assert.IsTrue(model1.Id == model2.Id, "Gets rae not pulling correctly");
            Assert.IsFalse(model1.FirstName == model2.FirstName, "First name failed to update.");
            Assert.IsFalse(model1.MiddleInitial == model2.MiddleInitial, "Middle initial failed to update.");
            Assert.IsFalse(model1.LastName == model2.LastName, "Last name failed to update.");
            Assert.IsFalse(model1.Email == model2.Email, "Email failed to update");
            Assert.IsFalse(model1.ModifiedBy == model2.ModifiedBy, "Modified by failed to update");
        }

        [TestMethod]
        public void Delete_Test()
        {
            UserAddRequest model = new UserAddRequest
            {
                FirstName = "First Name",
                MiddleInitial = "M",
                LastName = "Last Name",
                Email = "Some Email",
                ModifiedBy = "Unit Test"
            };
            int id = _svc.Insert(model);

            UserDomain model1 = _svc.SelectById(id);

            _svc.Delete(id);

            UserDomain model2 = _svc.SelectById(id);

            Assert.IsTrue(model1.Id > 0, "User does not exist");
            // Assert.IsNull(model2.Email, "User does not exist");
        }
    }
}


