using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.BookingEventDAL
{
    [ApiController]
    [Route("[controller]")]
    public class BookingEventDAL : ControllerBase
    {
        [HttpGet(Name = "BookingEventGetAll")]
        public List<BookingEvent> BookingEventGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetBookingEvent", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<BookingEvent> bookingevents = new List<BookingEvent>();
                    while (reader.Read())
                    {
                        BookingEvent bookingevent = new BookingEvent
                        {
                            Id = Convert.ToInt32(reader["BookingEventId"]),
                            RGuestName = reader["NameSurname"].ToString(),
                            RKimlikNo = Convert.ToInt32(reader["KimlikNo"]),
                            Checkin = Convert.ToDateTime(reader["CheckinDate"]).Date,
                            Checkout = Convert.ToDateTime(reader["CheckoutDate"]).Date,
                            NumGuest = Convert.ToInt32(reader["NumGuest"]),
                            EventName= reader["EventName"].ToString(),
                            Amount = Convert.ToSingle(reader["BookingAmount"]),
                            PaymentName = reader["PaymentName"].ToString()
                        };
                        bookingevents.Add(bookingevent);
                    }
                    reader.Close();
                    connection.Close();
                    return bookingevents;
                }
            }

        }
    }
}
