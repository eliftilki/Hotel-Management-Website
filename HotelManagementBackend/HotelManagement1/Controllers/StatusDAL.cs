using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.StatusDAL
{
    [ApiController]
    [Route("[controller]")]
    public class StatusDAL : ControllerBase
    {
        [HttpGet(Name = "StatusGetAll")]
        public List<Status> StatusGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetStatus", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<Status> statuss = new List<Status>();
                    while (reader.Read())
                    {
                        Status status = new Status
                        {
                            Id = Convert.ToInt32(reader["StatusCleanId"]),
                            RoomNum = Convert.ToInt32(reader["RoomNum"]),
                            FloorNum = Convert.ToInt32(reader["FLoorNum"]),
                            Date = Convert.ToDateTime(reader["DATE_"]).Date,
                            StaffName = reader["StaffName"].ToString(),
                        };
                        statuss.Add(status);
                    }
                    reader.Close();
                    connection.Close();
                    return statuss;
                }
            }

        }

        [HttpPost("AddStatus")]
        public int AddStatus(Status status)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";

            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand("spAddStatus", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@RoomNum", status.RoomNum);
                    command.Parameters.AddWithValue("@StaffName", status.StaffName);
                    command.Parameters.AddWithValue("@Date", status.Date);

                    int rowsAffected = command.ExecuteNonQuery();
                    connection.Close();

                    if (rowsAffected == -1)
                    {
                        return -1; // Failed to execute the command
                    }
                }
            }

            return 1; // Successfully executed the command
        }

    }
}