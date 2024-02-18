using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using System;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.StayedGuestDAL
{
    [ApiController]
    [Route("[controller]")]
    public class StayedGuestDAL : ControllerBase
    {
        [HttpGet(Name = "StayedGetAll")]
        public List<StayedGuest> StayedGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetStayedGuest", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<StayedGuest> stayedGuests = new List<StayedGuest>();
                    while (reader.Read())
                    {
                        StayedGuest stayedguest = new StayedGuest
                        {
                            Id = Convert.ToInt32(reader["GuestId"]),
                            GuestName = reader["NameSurname"].ToString(),
                            KimlikNo = Convert.ToInt32(reader["KimlikNo"]),
                            Checkin = Convert.ToDateTime(reader["CheckinDate"]).Date,
                            Checkout = Convert.ToDateTime(reader["CheckoutDate"]).Date,
                            RoomNum = Convert.ToInt32(reader["RoomNum"]),
                            ClassName = reader["ClassName"].ToString(),
                            Amount = Convert.ToSingle(reader["BookingAmount"]),
                            PaymentName = reader["PaymentName"].ToString(),
                            
                        };
                        stayedGuests.Add(stayedguest);
                    }
                    reader.Close();
                    connection.Close();
                    return stayedGuests;
                }
            }

        }


        [HttpPost("AddGuests")]
        public void AddGuests(StayedGuest sguest)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spAddStayedGuestGuests", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@GuestName", sguest.GuestName);
                    command.Parameters.AddWithValue("@KimlikNo", sguest.KimlikNo);
                    command.Parameters.AddWithValue("@RKimlikNo", sguest.RKimlikNo);
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
        }


        [HttpPost("AddStayedBooking")]
        public void AddStayedBooking(StayedGuest sguest)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spAddStayedRGuestBooking", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@RGuestName", sguest.RGuestName);
                    command.Parameters.AddWithValue("@RKimlikNo", sguest.RKimlikNo);
                    command.Parameters.AddWithValue("@Checkin", sguest.Checkin);
                    command.Parameters.AddWithValue("@Checkout", sguest.Checkout);
                    command.Parameters.AddWithValue("@Amount", sguest.Amount);
                    command.Parameters.AddWithValue("@PaymentName", sguest.PaymentName);
                    command.Parameters.AddWithValue("@BookingType", sguest.BookingType);
                    command.Parameters.AddWithValue("@NumAdult", sguest.NumAdult);
                    command.Parameters.AddWithValue("@NumChild", sguest.NumChild);
                    command.Parameters.AddWithValue("@RoomId", sguest.RoomId);
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
        }
        [HttpPut("UpdateStayedGuest")]
        public void UpdateStayedGuest(StayedGuest sguest)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spUpdateGuest", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@GuestInfoId", sguest.Id);
                    command.Parameters.AddWithValue("@GuestName", sguest.GuestName);
                    command.Parameters.AddWithValue("@KimlikNo", sguest.KimlikNo);
            
                    command.ExecuteNonQuery();
                }
            }
        }
        [HttpGet("GetAllOBName",Name ="GetAllOBName")]
        public List<StayedGuest> GetAllOBName()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetStayedGuestobname", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<StayedGuest> stayedGuests = new List<StayedGuest>();
                    while (reader.Read())
                    {
                        StayedGuest stayedguest = new StayedGuest
                        {
                            Id = Convert.ToInt32(reader["GuestId"]),
                            GuestName = reader["NameSurname"].ToString(),
                            KimlikNo = Convert.ToInt32(reader["KimlikNo"]),
                            Checkin = Convert.ToDateTime(reader["CheckinDate"]).Date,
                            Checkout = Convert.ToDateTime(reader["CheckoutDate"]).Date,
                            RoomNum = Convert.ToInt32(reader["RoomNum"]),
                            ClassName = reader["ClassName"].ToString(),
                            Amount = Convert.ToSingle(reader["BookingAmount"]),
                            PaymentName = reader["PaymentName"].ToString()
                        };
                        stayedGuests.Add(stayedguest);
                    }
                    reader.Close();
                    connection.Close();
                    return stayedGuests;
                }
            }

        }
    }
}
