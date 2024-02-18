namespace HotelManagement1.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime Checkin { get; set; }
        public DateTime Checkout { get; set; }
        public string RGuestName { get; set; }
        public int RKimlikNo { get; set; }
        public int NumAdult { get; set; }
        public int NumChild { get; set; }
        public int RoomNum { get; set; }
        public float Amount { get; set; }
        public string PaymentType { get; set; }
    }
}
