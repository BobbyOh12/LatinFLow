using LatinFlow.Data;
using LatinFlow.Data.Providers;
using LatinFlow.Models;
using LatinFlow.Models.Domain;
using LatinFlow.Models.Request;
using LatinFlow.Models.Requests;
using LatinFlow.Services.Cryptography;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Services
{
    public class UserService : IUserService
    {
        private IAuthenticationService _authenticationService;
        private ICryptographyService _cryptographyService;
        private IDataProvider _dataProvider;
        private const int HASH_ITERATION_COUNT = 200;
        private const int RAND_LENGTH = 30;

        public UserService(IAuthenticationService authSerice, ICryptographyService cryptographyService, IDataProvider dataProvider)
        {
            _authenticationService = authSerice;
            _dataProvider = dataProvider;
            _cryptographyService = cryptographyService;
        }


        public IUserAuthData LogIn(string email, string password)
        {
            bool isSuccessful = false;
            IUserAuthData response = new UserBase();

            string salt = GetSalt(email);

            if (!String.IsNullOrEmpty(salt))
            {
                string passwordHash = _cryptographyService.Hash(password, salt, HASH_ITERATION_COUNT);

                response = Get(email, passwordHash);

                if (response != null)
                {
                    _authenticationService.LogIn(response);
                    isSuccessful = true;
                }
            }

            return response;

        }


        public bool LogInTest(string email, string password, int id, string[] roles = null)
        {
            bool isSuccessful = false;
            var testRoles = new[] { "User", "Super", "Content Manager" };

            var allRoles = roles == null ? testRoles : testRoles.Concat(roles);

            IUserAuthData response = new UserBase
            {
                Id = id
                ,
                Name = "FakeUser" + id.ToString()
                ,
                Roles = allRoles
            };

            Claim tenant = new Claim("Tenant", "Acme Corp");
            Claim fullName = new Claim("CustomClaim", "LatinFlow Bootcamp");

            //Login Supports multiple claims
            //and multiple roles a good an quick example to set up for 1 to many relationship
            _authenticationService.LogIn(response, new Claim[] { tenant, fullName });

            return isSuccessful;

        }


        public int Create(LoginAddRequest userModel)
        {
            int userId = 0;
            string salt;
            string passwordHash;
            string password = userModel.Password;

            salt = _cryptographyService.GenerateRandomString(RAND_LENGTH);
            passwordHash = _cryptographyService.Hash(password, salt, HASH_ITERATION_COUNT);
            this._dataProvider.ExecuteNonQuery(
                "Login_Create",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    SqlParameter parm = new SqlParameter
                    {
                        ParameterName = "@Id",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Output
                    };
                    paramCol.Add(parm);
                    paramCol.AddWithValue("@FirstName", userModel.FirstName);
                    paramCol.AddWithValue("@MiddleInitial", userModel.MiddleInitial);
                    paramCol.AddWithValue("@LastName", userModel.LastName);
                    paramCol.AddWithValue("@Email", userModel.Email);
                    paramCol.AddWithValue("@Salt", salt);
                    paramCol.AddWithValue("@PasswordHash", passwordHash);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    userId = (int)paramCol["@Id"].Value;
                }
            );
            return userId;
        }



        /// <summary>
        /// Gets the Data call to get a give user
        /// </summary>
        /// <param name="email"></param>
        /// <param name="passwordHash"></param>
        /// <returns></returns>
        private IUserAuthData Get(string email, string passwordHash)
        {
            LoginDomain checkModel = SelectLoginByEmail(email);
            string passwordFromDb = checkModel.PasswordHash;
            UserBase user = new UserBase();
            // List<string> roles = new List<string>();
            if (passwordFromDb == passwordHash)
            {
                UserDomain model = SelectByEmail(email);
                user.Id = model.Id;
                user.Name = model.Email;
                return user;
            }
            else
            { return null; }
        }

        /// <summary>
        /// The Dataprovider call to get the Salt for User with the given UserName/Email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        private string GetSalt(string email)
        {
            string salt = "";
            this._dataProvider.ExecuteCmd(
               "Login_SelectSaltByEmail",
               inputParamMapper: delegate (SqlParameterCollection paramCol)
               {
                   paramCol.AddWithValue("@Email", email);
               },
               singleRecordMapper: delegate (IDataReader reader, short set)
               {
                   salt = reader.GetSafeString(1);
               }
           );
            return salt;
        }


        private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
    
        public int Insert(UserAddRequest model)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "User_Insert";
                SqlCommand cmd = new SqlCommand(cmdText, conn);
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = System.Data.SqlDbType.Int;
                    parm.Direction = System.Data.ParameterDirection.Output;

                    cmd.Parameters.Add(parm);
                    cmd.Parameters.AddWithValue("@FirstName", model.FirstName);
                    cmd.Parameters.AddWithValue("@MiddleInitial", model.MiddleInitial);
                    cmd.Parameters.AddWithValue("@LastName", model.LastName);
                    cmd.Parameters.AddWithValue("@Email", model.Email);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }
        
        public List<UserDomain> SelectAll()
        {
            List<UserDomain> result = new List<UserDomain>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "User_SelectAll";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while(reader.Read())
                    {
                        UserDomain model = Mapper(reader);
                        result.Add(model);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public UserDomain SelectByEmail(string email)
        {
            UserDomain model = new UserDomain();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "User_SelectByEmail";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Email", email);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        model = Mapper(reader);
                    }
                    conn.Close();
                }
                return model;
            }
        }

        public LoginDomain SelectLoginByEmail(string email)
        {
            LoginDomain model = new LoginDomain();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Login_SelectByEmail";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Email", email);
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        model = LoginMapper(reader);
                    }
                    conn.Close();
                }
                return model;
            }
        }

        public UserDomain SelectById(int id)
        {
            UserDomain model = new UserDomain();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "User_SelectById";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        model = Mapper(reader);                        
                    }
                    conn.Close();
                }
            }
            return model;
        }

        public void Update(UserUpdateRequest model)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "User_Update";
                SqlCommand cmd = new SqlCommand(cmdText, conn);
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", model.Id);
                    cmd.Parameters.AddWithValue("@FirstName", model.FirstName);
                    cmd.Parameters.AddWithValue("@MiddleInitial", model.MiddleInitial);
                    cmd.Parameters.AddWithValue("@LastName", model.LastName);
                    cmd.Parameters.AddWithValue("@Email", model.Email);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        }

        public void Delete(int id)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "User_Delete";
                SqlCommand cmd = new SqlCommand(cmdText, conn);
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }
        } 

        private static UserDomain Mapper(SqlDataReader reader)
        {
            UserDomain model = new UserDomain();
            int index = 0;
            model.Id = reader.GetInt32(index++);
            model.FirstName = reader.GetString(index++);
            if (!reader.IsDBNull(index))
                model.MiddleInitial = reader.GetString(index++);
            else
                index++;
            model.LastName = reader.GetString(index++);
            model.Email = reader.GetString(index++);
            model.CreatedDate = reader.GetDateTime(index++);
            model.ModifiedDate = reader.GetDateTime(index++);
            model.ModifiedBy = reader.GetString(index++);
            return model;
        }

        private static LoginDomain LoginMapper(SqlDataReader reader)
        {
            LoginDomain model = new LoginDomain();
            int index = 0;
            model.Email = reader.GetSafeString(index++);
            model.Salt = reader.GetSafeString(index++);
            model.PasswordHash = reader.GetSafeString(index++);
            model.RelatedUserId = reader.GetSafeInt32(index++);
            model.LastLogin = reader.GetSafeDateTime(index++);
            model.CreatedDate = reader.GetSafeDateTime(index++);
            model.ModifiedDate = reader.GetSafeDateTime(index++);
            model.ModifiedBy = reader.GetSafeString(index++);

            return model;
        }
    }
}
