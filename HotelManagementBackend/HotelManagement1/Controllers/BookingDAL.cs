using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.BookingDAL
{
    [ApiController]
    [Route("[controller]")]
    public class BookingDAL
    {
        [HttpGet(Name = "BookingGetAll")]
        public List<Booking> BookingGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetBooking", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<Booking> bookings = new List<Booking>();
                    while (reader.Read())
                    {
                        Booking booking = new Booking
                        {
                            Id = Convert.ToInt32(reader["BookingId"]),
                            Checkin = Convert.ToDateTime(reader["CheckinDate"]).Date,
                            Checkout = Convert.ToDateTime(reader["CheckoutDate"]).Date,
                            RGuestName = reader["NameSurname"].ToString(),
                            RKimlikNo = Convert.ToInt32(reader["KimlikNo"]),
                            NumAdult = Convert.ToInt32(reader["NumAdult"]),
                            NumChild = Convert.ToInt32(reader["NumChild"]),
                            RoomNum = Convert.ToInt32(reader["RoomNum"]),
                            Amount = Convert.ToSingle(reader["BookingAmount"]),
                            PaymentType = reader["PaymentName"].ToString()
                        };
                        bookings.Add(booking);
                    }
                    reader.Close();
                    connection.Close();
                    return bookings;
                }
            }

        }


    }
}
