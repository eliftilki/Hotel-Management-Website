using HotelManagement1.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Xml.Linq;

namespace HotelManagement1.Controllers.StaffAndDepartmanDAL
{
    [ApiController]
    [Route("[controller]")]
    public class StaffAndDepartmanDAL:ControllerBase
    {
        [HttpGet(Name = "StaffGetAll")]
        public List<StaffAndDepartman> StaffGetAll()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spGetStaffAndDepartman", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<StaffAndDepartman> staffs = new List<StaffAndDepartman>();
                    while (reader.Read())
                    {
                        StaffAndDepartman staff = new StaffAndDepartman
                        {
                            Id = Convert.ToInt32(reader["StaffId"]),
                            StaffName = reader["StaffName"].ToString(),
                            Telephone = reader["StaffTelephone"].ToString(),
                            DepartmanName = reader["DepartmanName"].ToString()
                        };
                        staffs.Add(staff);
                    }
                    reader.Close();
                    connection.Close();
                    return staffs;
                }
            }
        }
        [HttpPost("AddStaff")]
        public void AddStaff(StaffAndDepartman staff)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spAddStaff", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@StaffName", staff.StaffName);
                    command.Parameters.AddWithValue("@Telephone", staff.Telephone);
                    command.Parameters.AddWithValue("@DepartmentName", staff.DepartmanName); // Düzeltme
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }

        }
        //[HttpPut("AddStaff")]
        //public StaffAndDepartman GetById(int staffId)
        //{
        //    StaffAndDepartman staff = new StaffAndDepartman();
        //    string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
        //    using (SqlConnection connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();
        //        using (SqlCommand command = new SqlCommand("spGetStaffById", connection))
        //        {
        //            command.CommandType = CommandType.StoredProcedure;
        //            command.Parameters.AddWithValue("@Id", staffId); // staffId parametresi eklenmiştir
        //            SqlDataReader reader = command.ExecuteReader();
                    
        //            while (reader.Read())
        //            {


        //                staff.Id = Convert.ToInt32(reader["StaffId"]);
        //                staff.StaffName = reader["StaffName"].ToString();
        //                staff.Telephone = reader["StaffTelephone"].ToString();
        //                staff.DepartmanName = reader["DepartmanName"].ToString();
                        
                        
        //            }
        //            reader.Close();
        //            connection.Close();
        //            return staff;
        //        }
        //    }
        //}
        [HttpPut("UpdateStaff")]
        public void UpdateStaff(StaffAndDepartman staff)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spUpdateStaff", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
 

                        command.Parameters.AddWithValue("@StaffId", staff.Id);
                        command.Parameters.AddWithValue("@StaffName", staff.StaffName);
                        command.Parameters.AddWithValue("@Telephone", staff.Telephone);
                        command.Parameters.AddWithValue("@DepartmentName", staff.DepartmanName);
                        command.ExecuteNonQuery();
                   
                  
                    
                }
            }
        }
        [HttpDelete("DeleteStaff")]
        public void DeleteStaff(int staffId)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spDeleteStaff", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@StaffId", staffId);
                    command.ExecuteNonQuery();
                }
            }
        }
        [HttpGet("GetDepartmanElemanSayisi",Name ="GetElemanSayisi")]
        public List<StaffAndDepartman> GetDepartmanElemanSayisi()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spDepartmanElemanSayisi", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<StaffAndDepartman> staffs = new List<StaffAndDepartman>();
                    while (reader.Read())
                    {
                        StaffAndDepartman staff = new StaffAndDepartman
                        {
                            DepartmanName = reader["DepartmanName"].ToString(),
                            PersonelSayisi = Convert.ToInt32(reader["PersonelSayisi"])
                        };
                        staffs.Add(staff);
                    }
                    reader.Close();
                    connection.Close();
                    return staffs;
                }
            }
        }


    }
}
