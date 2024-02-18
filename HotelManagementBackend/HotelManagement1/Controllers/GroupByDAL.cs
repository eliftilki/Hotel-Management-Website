using HotelManagement1.Models;
using System.Data.SqlClient;
using System.Data;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement1.Controllers.GroupByDAL
{
    [ApiController]
    [Route("[controller]")]
    public class GroupByDAL:ControllerBase
    {
        [HttpGet("MevsimMusteriKar", Name = "GetMevsimMusteriKar")]
        public List<GroupBy> GetMevsimMusteriKar()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spMevsimKarMusteri", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<GroupBy> groupbys = new List<GroupBy>();
                    while (reader.Read())
                    {
                        GroupBy groupby = new GroupBy
                        {

                            Mevsim = reader["Mevsim"].ToString(),
                            ToplamKazanc = Convert.ToInt32(reader["ToplamKazanc"]),
                            KonaklayanMusteriSayisi = Convert.ToInt32(reader["KonaklayanMusteriSayisi"])
                        };
                        groupbys.Add(groupby);
                    }
                    reader.Close();
                    connection.Close();
                    return groupbys;
                }
            }
        }

        [HttpGet("FiltreliMevsimMusteriKar", Name = "GetFiltreliMevsimMusteriKar")]
        public GroupBy GetFiltreliMevsimMusteriKar(string mevsim)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("spMevsimBazliKarMusteri", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Mevsim", mevsim);
                    SqlDataReader reader = command.ExecuteReader();
                    GroupBy groupby = new GroupBy
                    {
                        Mevsim = reader["Mevsim"].ToString(),
                        ToplamKazanc = Convert.ToInt32(reader["ToplamKazanc"]),
                        KonaklayanMusteriSayisi = Convert.ToInt32(reader["KonaklayanMusteriSayisi"])
                    };

                    reader.Close();
                    connection.Close();
                    return groupby;
                }
            }
        }

        [HttpGet("AyKazancMusteri", Name = "GetAyKazancMusteri")]
        public List<GroupBy> GetAyKazancMusteri()
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("GetAylarKarMusteri", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    List<GroupBy> groupbys = new List<GroupBy>();
                    while (reader.Read())
                    {
                        GroupBy groupby = new GroupBy
                        {

                            Ay = reader["Ay"].ToString(),
                            ToplamKazanc = Convert.ToInt32(reader["ToplamKazanc"]),
                            KonaklayanMusteriSayisi = Convert.ToInt32(reader["KonaklayanMusteriSayisi"])
                        };
                        groupbys.Add(groupby);
                    }
                    reader.Close();
                    connection.Close();
                    return groupbys;
                }
            }
        }

        [HttpGet("FiltreliAyMusteriKar", Name = "GetFiltreliAyMusteriKar")]
        public GroupBy GetFiltreliAyMusteriKar(string ay)
        {
            string ConnectionString = @"data source=DESKTOP-0LANPAD\SQLEXPRESS; database=Hotel_Management; integrated security=SSPI";

            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand("GetAyBazliKarMusteri", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Ay", ay);

                    // Execute the reader
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        // Check if there are rows
                        if (reader.HasRows)
                        {
                            // Assuming your data class is named YourDataClass
                            GroupBy data = new GroupBy();

                            // Assuming Ay, ToplamKazanc, and KonaklayanMusteriSayisi are properties in YourDataClass
                            while (reader.Read())
                            {
                                data.Ay = reader["Ay"].ToString();
                                data.ToplamKazanc = Convert.ToInt32(reader["ToplamKazanc"]);
                                data.KonaklayanMusteriSayisi = Convert.ToInt32(reader["KonaklayanMusteriSayisi"]);
                            }

                            return data;
                        }
                        else
                        {
                            // Handle the case where no rows are returned
                            return null;
                        }
                    }
                }
            }
        }



    }
}