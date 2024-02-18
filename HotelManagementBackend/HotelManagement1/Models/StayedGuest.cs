namespace HotelManagement1.Models
{
    public class StayedGuest
    {
        public int Id { get; set; }
        public string GuestName { get; set; }
        public int KimlikNo { get; set; }
        public DateTime Checkin { get; set; }
        public DateTime Checkout { get; set; }
        public int RoomNum { get; set; }
        public string ClassName { get; set; }
        public float Amount { get; set; }
        public string PaymentName { get; set; }
        public int NumAdult { get; set; }
        public int NumChild { get; set; }
        public string BookingType { get; set; }
        public string RGuestName { get; set; }
        public int RKimlikNo { get; set; }
        public int RoomId {  get; set; }

    }
}
 