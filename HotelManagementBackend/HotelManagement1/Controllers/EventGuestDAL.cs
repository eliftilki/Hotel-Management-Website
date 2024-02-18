using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.StayedGuestDAL
{
    [ApiController]
    [Route("[controller]")]
    public class EventGuestDAL:ControllerBase
    {
        [HttpGet(Name = "EventGetAll")]
        public List<EventGuest> EventGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetEventGuest", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<EventGuest> eventguests = new List<EventGuest>();
                    while (reader.Read())
                    {
                        EventGuest eguest = new EventGuest
                        {
                            Id = Convert.ToInt32(reader["EventId"]),
                            GuestName = reader["NameSurname"].ToString(),
                            KimlikNo = Convert.ToInt32(reader["KimlikNo"]),
                            EventName = reader["EventName"].ToString(),
                            RGuestName = reader["ResponsibleGuest"].ToString(),
                            Checkin = Convert.ToDateTime(reader["CheckinDate"]).Date,
                            Checkout = Convert.ToDateTime(reader["CheckoutDate"]).Date,
                        };
                        eventguests.Add(eguest);
                    }
                    reader.Close();
                    connection.Close();
                    return eventguests;
                }
            }

        }
        [HttpPost("AddEventGuest")]

        public void AddEventGuests(EventGuest eguest)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spAddEventGuestGuests", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@GuestName", eguest.GuestName);
                    command.Parameters.AddWithValue("@KimlikNo", eguest.KimlikNo);
                    command.Parameters.AddWithValue("@RKimlikNo", eguest.RKimlikNo);
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
        }
        [HttpPost("AddEventBooking")]
        public void AddEventBooking(EventGuest eguest)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spAddEventRGuestBooking", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@RGuestName", eguest.RGuestName);
                    command.Parameters.AddWithValue("@RKimlikNo", eguest.RKimlikNo);
                    command.Parameters.AddWithValue("@Checkin", eguest.Checkin);
                    command.Parameters.AddWithValue("@Checkout", eguest.Checkout);
                    command.Parameters.AddWithValue("@EventName", eguest.EventName);
                    command.Parameters.AddWithValue("@NumGuest", eguest.NumGuest);
                    command.Parameters.AddWithValue("@Amount", eguest.Amount);
                    command.Parameters.AddWithValue("@PaymentName", eguest.PaymentName);
                   
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
        }
        [HttpPut("UpdateEventGuest")]
        public void UpdateEventGuest(EventGuest eguest)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spUpdateGuest", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@GuestInfoId", eguest.Id);
                    command.Parameters.AddWithValue("@GuestName", eguest.GuestName);
                    command.Parameters.AddWithValue("@KimlikNo", eguest.KimlikNo);

                    command.ExecuteNonQuery();
                }
            }
        }

    }
}
