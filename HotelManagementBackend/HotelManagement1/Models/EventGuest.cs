namespace HotelManagement1.Models
{
    public class EventGuest
    {
        public int Id { get; set; }
        public string GuestName { get; set; }
        public int KimlikNo { get; set; }
        public string EventName { get; set; }
        public string RGuestName { get; set; }
        public int RKimlikNo { get; set; }
        public DateTime Checkin { get; set; }
        public DateTime Checkout { get; set; }
        public int NumGuest { get; set; }
        public float Amount { get; set; }
        public string PaymentName { get; set; }

    }
}
