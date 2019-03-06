using LatinFlow.Data;
using LatinFlow.Data.Providers;
using LatinFlow.Models.Domain;
using LatinFlow.Models.Requests;
using LatinFlow.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LatinFlow.Services
{
    public class UrlService : IUrlService
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        private IDataProvider _dataProvider;

        public UrlService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        public int Create(UrlAddRequest model)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Url_Insert";
                SqlCommand cmd = new SqlCommand(cmdText, conn);
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = System.Data.SqlDbType.Int;
                    parm.Direction = System.Data.ParameterDirection.Output;

                    cmd.Parameters.Add(parm);
                    cmd.Parameters.AddWithValue("@Title", model.Title);
                    // cmd.Parameters.AddWithValue("@Location", model.Location);
                    // cmd.Parameters.AddWithValue("@DanceType", model.DanceType);
                    cmd.Parameters.AddWithValue("@Description", model.Description);
                    cmd.Parameters.AddWithValue("@Url", model.Url);
                    cmd.Parameters.AddWithValue("@Image", model.Image);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }

        public List<UrlDomain> SelectAll()
        {
            List<UrlDomain> result = new List<UrlDomain>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Url_SelectAll";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while(reader.Read())
                    {
                        UrlDomain model = Mapper(reader);
                        result.Add(model);
                    }
                    conn.Close();
                }
            }
            return result;
        }

        public UrlDomain SelectById(int id)
        {
            UrlDomain model = new UrlDomain();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Url_SelectById";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", id);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while(reader.Read())
                    {
                        model = Mapper(reader);
                    }
                    conn.Close();
                }
            }
            return model;
        }

        public void Delete(int id)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Url_Delete";
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

        private static UrlDomain Mapper(SqlDataReader reader)
        {
            UrlDomain model = new UrlDomain();
            int index = 0;
            model.Id = reader.GetInt32(index++);
            model.Title = reader.GetSafeString(index++);
            model.Location = reader.GetSafeString(index++);
            model.DanceType = reader.GetSafeString(index++);
            model.Description = reader.GetSafeString(index++);
            model.Url = reader.GetSafeString(index++);
            model.Image = reader.GetSafeString(index++);

            return model;
        }
    }
}
