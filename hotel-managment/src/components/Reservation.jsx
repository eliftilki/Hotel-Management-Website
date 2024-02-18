import React from "react";
import bgResim from "../images/hero_4.jpg";
import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";
import person3 from "../images/person_3.jpg";
import "../css/_custom.css";
import "../css/style.css";

import "../css/bootstrap-grid.css";
import "../css/bootstrap.css";
import "../css/bootstrap-reboot.css";
import "../css/bootstrap.min.css";
import "../css/fancybox.min.css";
import "../css/jquery.timepicker.css";
import "../css/magnific-popup.css";
import "../css/owl.carousel.min.css";
import "../css/animate.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import swal from "sweetalert2";
import ReservationGuest from "./ReservationGuest";

function Reservation(){
  //responsible guest adı kimlik numarası 
const location = useLocation();
const id = location.state.id;
const checkin = location.state.FormsData.checkin;
const checkout = location.state.FormsData.checkout;
const adults = location.state.FormsData.adults;
const children = location.state.FormsData.children;
console.log("cocuk sayısıııı", children);
console.log("Yetişkin sayısıııı", adults);
const amaount = location.state.room.basePrice;
const className = location.state.room.className;
const room = location.state.room;
const FormsData = location.state.FormsData;
var bookingType ="Online";
var guestName = "";
var kimlikNo = "";
const navigate = useNavigate();  
const[RGuest, setRGuest] = useState({
  roomNum:0,
  className:className,
  rGuestName: " ",
  guestName:" ",
  rKimlikNo: "",
  kimlikNo: "",
  checkin: checkin,
  checkout: checkout,
  numAdult: adults,
  numChild: children,
  bookingType: bookingType,
  paymentName: "Nakit",
  amaount: amaount,
  roomId: id,
},


);
const handleChange = (e) => {
  const { name, value } = e.target;

  // Eğer name "rGuestName" veya "rKimlikNo" ise, aynı değeri guestName veya kimlikNo'ya ata
  if (name === "rGuestName") {
    setRGuest((prevData) => ({
      ...prevData,
      rGuestName: value,
      guestName: value, // guestName'e de ata
    }));
  } else if (name === "rKimlikNo") {
    setRGuest((prevData) => ({
      ...prevData,
      rKimlikNo: value,
      kimlikNo: value, // kimlikNo'ya de ata
    }));
  } else {
    setRGuest((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
};
const handleResponsible = async() => {
  
  try {
    
    console.log("Guest Name:", RGuest.guestName);
    console.log("Kimlik No:", RGuest.kimlikNo);
    console.log("Dataaaaaaaaaa:", RGuest.rGuestName, RGuest.rKimlikNo, RGuest.checkin, RGuest.checkout, RGuest.amaount, RGuest.paymentName, RGuest.bookingType, RGuest.numAdult, RGuest.numChild, RGuest.roomId, RGuest.guestName, RGuest.kimlikNo);
    const RKimlikNo=RGuest.kimlikNo;
    const RGuestName=RGuest.guestName;
    if(RGuest.rGuestName === " " || RGuest.guestName === " "){
      swal.fire({
        title: "Rezervasyon Başarısız!",
        text: "Rezervasyonunuz başarısız.",
        icon: "error",
        button: "Tamam",
      });


    }
    else{
      const res = await axios.post(`https://localhost:7185/StayedGuestDAL/AddStayedBooking`, RGuest);
      const guestsCount= parseInt(RGuest.numAdult)+parseInt(RGuest.numChild)-1;
      if(guestsCount>0){
        navigate("/reservationGuest", { state: { room ,FormsData,id,RKimlikNo,RGuestName} })
      }
      else{
        console.log("Guest Sayısı:",guestsCount);
        swal.fire({
          title: "Rezervasyon Başarılı!",
          text: "Rezervasyonunuz başarıyla tamamlandı.",
          icon: "success",
          button: "Tamam",
        });
        navigate("/");
      }
     
    }
    
      // swal.fire({
      //   title: "Rezervasyon Başarılı!",
      //   text: "Rezervasyonunuz başarıyla tamamlandı.",
      //   icon: "success",
      //   button: "Tamam",
      // });

    
   
    // Perform any additional actions based on the response
 
  } catch (error) {
    console.error("Error:", error);
    swal.fire({
      title: "Rezervasyon Başarısız!",
      text: "Rezervasyonunuz başarısız.",
      icon: "error",
      button: "Tamam",
    });
  }
  

  // For demonstration, you can navigate to another page after handling the data
  // navigate("/rooms");
};
    return(
        <>
    
    <header class="site-header js-site-header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-6 col-lg-4 site-logo" data-aos="fade"><a href="index.html">Sogo Hotel</a></div>
          <div class="col-6 col-lg-8">


            <div class="site-menu-toggle js-site-menu-toggle"  data-aos="fade">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- END menu-toggle --> */}

            <div class="site-navbar js-site-navbar">
              <nav role="navigation">
                <div class="container">
                  <div class="row full-height align-items-center">
                    <div class="col-md-6 mx-auto">
                      <ul class="list-unstyled menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="rooms.html">Rooms</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li class="active"><a href="reservation.html">Reservation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* <!-- END head --> */}

    <section class="site-hero inner-page overlay"style={{backgroundImage:`url(${bgResim})` ,dataStellarBackgroundRatio:"0.5"}}>
      <div class="container">
        <div class="row site-hero-inner justify-content-center align-items-center">
          <div class="col-md-10 text-center" data-aos="fade">
            <h1 class="heading mb-3">Reservation Form</h1>
            <ul class="custom-breadcrumbs mb-4">
              <li><a href="index.html">Home</a></li>
              <li>&bullet;</li>
              <li>Reservation</li>
            </ul>
          </div>
        </div>
      </div>

      <a class="mouse smoothscroll" href="#next">
        <div class="mouse-icon">
          <span class="mouse-wheel"></span>
        </div>
      </a>
    </section>
    {/* <!-- END section --> */}

    <section class="section contact-section" id="next">
      <div class="container">
        <div class="row">
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            
          <p><b>İşlemi Yapan Kişi</b></p>
              <div class="row">
              
                <div class="col-md-6 form-group"> 
                  <label class="text-black font-weight-bold" for="rGuestName">Name</label>
                  <input onChange={handleChange} type="text" name="rGuestName" id="name" class="form-control "></input>
                </div>
                <div class="col-md-6 form-group"> 
                  <label class="text-black font-weight-bold" for="RKimlikNo">Kimlik No</label>
                  <input onChange={handleChange} type="number" name="rKimlikNo" id="kimlikNo" class="form-control "></input>
                </div>
                <div class="col-md-6 form-group">
                  <label class="text-black font-weight-bold" for="phone">Phone</label>
                  <input onChange={handleChange}  type="number" id="phone" class="form-control "></input>
                </div>
              </div>
          
              <div class="row">
                <div class="col-md-12 form-group">
                  <label class="text-black font-weight-bold" for="email">Email</label>
                  <input onChange={handleChange} type="email" id="email" class="form-control "></input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 form-group">
                  <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                  <input onChange={handleChange} type="text" id="checkin_date" value={checkin} class="form-control"></input>
                </div>
                <div class="col-md-6 form-group">
                  <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                  <input onChange={handleChange} type="text" id="checkout_date" value={checkout} class="form-control"></input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="adults" class="font-weight-bold text-black">Adults</label>
                  <div class="field-icon-wrap">
                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                    <select  onChange={handleChange} name="adults" id="adults" value={adults} class="form-control">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label for="children" class="font-weight-bold text-black">Children</label>
                  <div class="field-icon-wrap">
                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                    <select onChange={handleChange} name="children" id="children" value={children} class="form-control">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>

                </div>
              </div>

              <div class="row">
        <div class="col-md-6 form-group">
          <label for="paymentType" class="font-weight-bold text-black">Payment Type</label>
          <div class="field-icon-wrap">
            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
            <select
              onChange={handleChange}
              name="paymentType"
              id="paymentType"    
              class="form-control"
            >
              <option value="Cash">Cash</option>
              <option value="CreditCard">Credit Card</option>
              {/* Diğer ödeme tiplerini buraya ekleyebilirsiniz */}
            </select>
          </div>
        </div>
      </div>

              <div class="row mb-4">
                <div class="col-md-12 form-group">
                  <label class="text-black font-weight-bold" for="message">Notes</label>
                  <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <button type="submit" value="Devam Et" onClick={handleResponsible} class="btn btn-primary text-white py-3 px-5 font-weight-bold">Devam Et</button>
                </div>
              </div>
            

          </div>
          <div class="col-md-5" data-aos="fade-up" data-aos-delay="200">
            <div class="row">
              <div class="col-md-10 ml-auto contact-info">
                <p><span class="d-block">Address:</span> <span class="text-black"> Marmara Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği T4(Blok) Z06 Maltepe/İstanbul</span></p>
                <p><span class="d-block">Phone:</span> <span class="text-black"> (+90) 435 3533</span></p>
                <p><span class="d-block">Email:</span> <span class="text-black"> info@yourdomain.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section testimonial-section bg-light">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-7">
            <h2 class="heading" data-aos="fade-up">People Says</h2>
          </div>
        </div>
        <div class="row">
          <div class="js-carousel-2  mb-5" data-aos="fade-up" data-aos-delay="200">
            
            <div class="testimonial text-center slider-item">
              <div class="author-image mb-3">
                <img src={person1} alt="Image placeholder" class="rounded-circle mx-auto"></img>
              </div>
              <blockquote>

                <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; Jean Smith</em></p>
            </div> 

            <div class="testimonial text-center slider-item">
              <div class="author-image mb-3">
                <img src={person2} alt="Image placeholder" class="rounded-circle mx-auto"></img>
              </div>
              <blockquote>
                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>

            <div class="testimonial text-center slider-item">
              <div class="author-image mb-3">
                <img src={person3} alt="Image placeholder" class="rounded-circle mx-auto"></img>
              </div>
              <blockquote>

                <p>&ldquo;When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>


            

          </div>
           
        </div>

      </div>
    </section>

    
    
  
<Footer></Footer>
        </>
    );
}
export default Reservation;