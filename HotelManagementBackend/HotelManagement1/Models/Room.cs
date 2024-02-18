namespace HotelManagement1.Models
{
    public class Room
    {
        public int Id { get; set; }
        public int RoomNum { get; set; }
        public int FloorNum { get; set; }
        public string ClassName { get; set; }
        public int MetreKare { get; set; }
        public int NumAdult { get; set; }
        public int NumChild { get; set; }
        public string Photo { get; set; }
        public int BasePrice { get; set; }
    }
}
