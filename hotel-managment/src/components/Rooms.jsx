
import React from "react";
import bgResim from "../images/hero_4.jpg";
import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
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
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import CheckAvailability from "./CheckAvailability";
import { useLocation } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import menu from "../images/menu.png";
import { useState } from "react";


const RoomCard = ({ room ,FormsData}) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    console.log("roomClass:", room.className);
    console.log("forms:", FormsData);
    // id bul fonksiyonu çalışacak dönen değeri ve checkin ve checkout tarihlerini reservation sayfasına gönder
    const res= await axios.post(`https://localhost:7185/Oda?classname=${room.className}&checkin=${FormsData.checkin}&checkout=${FormsData.checkout}`);
    console.log("res:", res);
    console.log("res.data:", res.data);
    const id=res.data;
    if(id!=null)
    {
      console.log("Çocuk Sayısı",FormsData.children);
      console.log("Yetişkin Sayısı",FormsData.adults);
      navigate("/reservation", { state: { room ,FormsData,id} });
    }
    else{
      alert("No rooms available for the selected dates");
    }
     
  };

  console.log("room:", room);
  return (
    <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" onClick={handleClick}>
      
      
        <figure className="img-wrap">
          <img style={{width:"100vw",height:"30vh"}} src={`https://localhost:7185/${room.photo}?w=100&h=100&fit=crop&auto=format`} alt={room.className} className="img-fluid mb-3"></img>
        </figure>
        <div className="p-3 text-center room-info">
          <h2>OdaTipi:{room.className}</h2>
          <p className="text-uppercase letter-spacing-1">Odanın Metrekaresi: {room.metreKare}</p>
          <span className="text-uppercase letter-spacing-1"> Odanın Gecelik ücreti {room.basePrice}TL</span>
          <p>Maksimum Yetişkin Sayısı: {room.numAdult}</p>
          <p>Maksimum Çocuk Sayısı: {room.numChild}</p>
          {/* Buraya başka özellikler ekleyebilirsiniz */}
        </div>
      
    </div>
  );
};

function Rooms  () {
  const location = useLocation();
  const RoomsData = (location.state && location.state.RoomsData) || [];
  const FormsData=(location.state && location.state.FormsData) || [];
  console.log("RoomsData roomdayız:", RoomsData);
  console.log("FormsData roomdayız:", FormsData);
  const hasAvailableRooms = RoomsData.length > 0;
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
  
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log("Menü tıklandı. Yeni durum:", !isNavbarOpen);
  };

    return(
        <>
    
    <header className="site-header">
      <div className="container-fluid">
        <div className="row" style={{display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
          <div className="col-6 col-lg-4 site-logo" data-aos="fade"><a href="/home">Sogo Hotel</a></div>
          <div className="col-6 col-lg-8">
            <div style={{cursor:"pointer"}} onClick={handleMenuToggle}>
            <img src={menu} alt="Menu"  style={{width:"25px", marginLeft:"75%"}}/>
            </div>
             
              {isNavbarOpen && <CustomNavbar isNavbarOpen={isNavbarOpen} closeNavbar={closeNavbar}/>}
            </div>
        </div>
      </div>
      <div>
      </div>
    </header>
    {/* END head */

<section className="site-hero inner-page overlay" style={{backgroundImage:`url(${bgResim})` ,dataStellarBackgroundRatio:"0.5"}}>
<div className="container">
  <div className="row site-hero-inner justify-content-center align-items-center">
    <div className="col-md-10 text-center" data-aos="fade">
      <h1 className="heading mb-3">Rooms</h1>
      <ul className="custom-breadcrumbs mb-4">
        <li><a href="/home">Home</a></li>
        <li>&bullet;</li>
        <li>Rooms</li>
      </ul>
    </div>
  </div>
</div>


</section>
    /* END section */}

  
    
    <CheckAvailability></CheckAvailability>
    {hasAvailableRooms ? (
        <section className="availible-rooms">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-7">
                <h2 className="heading" data-aos="fade">
                  Rooms &amp; Suites
                </h2>
                <p data-aos="fade">
                 Sizin için belirtilen tarihlerdeki uygun odalarımız.
                </p>
              </div>
            </div>

            <div className="row">
              {RoomsData.map((room, index) => (
                <RoomCard key={index} room={room} FormsData={FormsData} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section classNameName="unavailable-rooms">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-7">
                <h2 className="heading" data-aos="fade">
                  No rooms available for the selected dates
                </h2>
              </div>
            </div>
          </div>
        </section>
      )}
    
    <section className="section">
      <div className="container">
        
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img1} alt="Free website template" className="img-fluid mb-3"></img>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Single Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img2} alt="Free website template" className="img-fluid mb-3"></img>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Family Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img3} alt="Free website template" className="img-fluid mb-3"></img>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Presidential Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img1} alt="Free website template" className="img-fluid mb-3"></img>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Single Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img2} alt="Free website template" className="img-fluid mb-3"></img>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Family Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img3} alt="Free website template" className="img-fluid mb-3"></img>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Presidential Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
    
    <section className="section bg-light">

      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade">Great Offers</h2>
            <p data-aos="fade">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
      
        <div className="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
          <a href="#" className="image d-block bg-image-2" style={{backgroundImage:'url(${imgResim1})' ,dataStellarBackgroundRatio:"0.5"}}></a>
          <div className="text">
            <span className="d-block mb-4"><span className="display-4 text-primary"></span> <span className="text-uppercase letter-spacing-2"></span> </span>
            <h2 className="mb-4">Family Room</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#" className="btn btn-primary text-white">Book Now</a></p>
          </div>
        </div>
        <div className="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="200">
          <a href="#" className="image d-block bg-image-2 order-2" style={{backgroundImage:'url(${imgResim2})' ,dataStellarBackgroundRatio:"0.5"}}></a>
          <div className="text order-1">
            <span className="d-block mb-4"><span className="display-4 text-primary"></span> <span className="text-uppercase letter-spacing-2"></span> </span>
            <h2 className="mb-4">Presidential Room</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#" className="btn btn-primary text-white">Book Now</a></p>
          </div>
        </div>

      </div>
    </section>

    <section className="section bg-image overlay" style={{backgroundImage:`url(${bgResim})` ,dataStellarBackgroundRatio:"0.5"}}>
      <div className="container" >
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
            <h2 className="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
          </div>
          <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
            <a href="/reservation" className="btn btn-outline-white-primary py-3 text-white px-5">Reserve Now</a>
          </div>
        </div>
      </div>
    </section>
    
    <Footer></Footer>
    
    {/* <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    
    
    <script src="js/aos.js"></script>
    
    <script src="js/bootstrap-datepicker.js"></script> 
    <script src="js/jquery.timepicker.min.js"></script> 
    <script src="js/main.js"></script> */}

        </>
    );
}
export default Rooms;
