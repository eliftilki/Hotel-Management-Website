using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.RoomDAL
{
    [ApiController]
    [Route("[controller]")]
    public class RoomDAL:ControllerBase
    {
        [HttpGet(Name = "RoomGetAll")]
        public List<Room> RoomGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetRoom", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<Room> rooms = new List<Room>();
                    while (reader.Read())
                    {
                        Room room = new Room
                        {
                            Id = Convert.ToInt32(reader["RoomId"]),
                            RoomNum = Convert.ToInt32(reader["RoomNum"]),
                            FloorNum = Convert.ToInt32(reader["FloorNum"]),
                            ClassName = reader["ClassName"].ToString(),
                            MetreKare = Convert.ToInt32(reader["SquareMetre"]),
                            NumAdult = Convert.ToInt32(reader["NumAdult"]),
                            NumChild = Convert.ToInt32(reader["NumChild"]),
                            Photo = reader["Photo"].ToString(),
                            BasePrice = Convert.ToInt32(reader["BasePrice"])

                        };
                        rooms.Add(room);
                    }
                    reader.Close();
                    connection.Close();
                    return rooms;
                }
            }

        }
        
        }
       
    
}
