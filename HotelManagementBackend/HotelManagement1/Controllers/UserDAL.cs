using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.UserDAL
{
    [ApiController]
    [Route("[controller]")]
    public class UserDAL:ControllerBase
    {
        [HttpGet(Name = "UserGetAll")]
        public List<User> UserGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetUser2", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<User> users = new List<User>();
                    while (reader.Read())
                    {
                        User user = new User
                        {
                            Id = Convert.ToInt32(reader["UserId"]),
                            Email = reader["Email"].ToString(),
                            Password = reader["Password_"].ToString(),
                            UserNameSurname= reader["NameSurname"].ToString(),
                            Telephone = reader["PhoneNumber"].ToString()
                        };
                        users.Add(user);
                    }
                    reader.Close();
                    connection.Close();
                    return users;
                }
            }
        }
        [HttpPost("AddUser")]
        public void Add(User user)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spAddUser2", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Email", user.Email);
                    command.Parameters.AddWithValue("@Password", user.Password);
                    command.Parameters.AddWithValue("@NameSurname", user.UserNameSurname);
                    command.Parameters.AddWithValue("@Telephone", user.Telephone);
                    command.Parameters.AddWithValue("@GuestName", user.GuestName);
                    command.Parameters.AddWithValue("@KimlikNo", user.KimlikNo);
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }

        }

    }
}
