using HotelManagement1.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace HotelManagement1.Controllers.Home
{
    [ApiController]
    [Route("[controller]")]
    public class Home : ControllerBase
    {
        //[HttpPut(Name = "Odasorgula")]
        //public List<Room>Odasorgula(DateTime checkin, DateTime checkout, int numAdult, int numChild)
        //{
        //    string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
        //    using (SqlConnection connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();
        //        using (SqlCommand command = new SqlCommand("sp_OdaSorgula", connection))
        //        {
        //            command.CommandType = CommandType.StoredProcedure;
        //            command.Parameters.AddWithValue("@Checkin", checkin);
        //            command.Parameters.AddWithValue("@Checkout", checkout);
        //            command.Parameters.AddWithValue("@NumAdult", numAdult);
        //            command.Parameters.AddWithValue("@NumChild", numChild);

        //            SqlDataReader reader = command.ExecuteReader();
        //            List<Room> rooms = new List<Room>();
        //            while (reader.Read())
        //            {
        //                Room room = new Room
        //                {
        //                    ClassName = reader["ClassName"].ToString(),
        //                    MetreKare = Convert.ToInt32(reader["SquareMetre"]),
        //                    NumAdult = Convert.ToInt32(reader["NumAdult"]),
        //                    NumChild = Convert.ToInt32(reader["NumChild"]),
        //                    Photo = reader["Photo"].ToString(),
        //                    BasePrice = Convert.ToInt32(reader["BasePrice"])

        //                };
        //                rooms.Add(room);
        //            }
        //            reader.Close();
        //            connection.Close();
        //            return rooms;
        //        }
        //    }
        //}
        //[HttpPost(Name = "RoomIdBul")]
        //public void RoomIdBul(int RoomId, DateTime checkin, DateTime checkout)
        //{
        //    string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
        //    using (SqlConnection connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();
        //        using (SqlCommand command = new SqlCommand("spRoomIdBul", connection))
        //        {
        //            command.CommandType = CommandType.StoredProcedure;
        //            command.Parameters.AddWithValue("@RoomId", RoomId);
        //            command.Parameters.AddWithValue("@Checkin", checkin);
        //            command.Parameters.AddWithValue("@Checkout", checkout);
        //            command.ExecuteNonQuery();
        //        }
        //    }
        //}
    }
}