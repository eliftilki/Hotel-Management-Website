
import React from "react";
import bgResim4 from "../images/hero_4.jpg";
import bgResim3 from "../images/hero_3.jpg";
import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";
import person3 from "../images/person_3.jpg";
import img1 from "../images/img_1.jpg";
import food1 from "../images/food-1.jpg";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";
import slider4 from "../images/slider-4.jpg";
import slider5 from "../images/slider-5.jpg";
import slider6 from "../images/slider-6.jpg";
import slider7 from "../images/slider-7.jpg";
import { Link, useNavigate } from "react-router-dom";
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
import Footer from "./Footer";
import CheckAvailability from "./CheckAvailability";
import CustomNavbar from "./CustomNavbar";
import { useState } from "react";
import menu from "../images/menu.png";
import bgResim from "../images/hero_1.jpg";

function About(){
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
  
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log("Menü tıklandı. Yeni durum:", !isNavbarOpen);
  };
    
    return (
        <>
   
   
{/* 
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/jquery.timepicker.css">
    <link rel="stylesheet" href="css/fancybox.min.css">
    
    <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css"> */}

    {/* <!-- Theme Style --> */}
    {/* <link rel="stylesheet" href="css/style.css">
   */}
    
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
      <h1 className="heading mb-3">About Us</h1>
      <ul className="custom-breadcrumbs mb-4">
        <li><a href="/home">Home</a></li>
        <li>&bullet;</li>
        <li>About Us</li>
      </ul>
    </div>
  </div>
</div>


</section>
    /* END section */}
    <CheckAvailability></CheckAvailability>

    <section className="py-5 bg-light" id="next">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
            <figure className="img-absolute">
              <img src={food1} alt="Free Website Template by Templateux" className="img-fluid"></img>
            </figure>
            <img src={img1} alt="Image" className="img-fluid rounded"></img>
          </div>
          <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
            <h2 className="heading">Welcome!</h2>
            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><Link  to="/about" onClick={() => navigate("/about")} className="btn btn-primary text-white py-2 mr-3">Learn More</Link> <span className="mr-3 font-family-serif"></span></p>
          </div>
          
        </div>
      </div>
    </section>

    <div className="container section">

      <div className="row justify-content-center text-center mb-5">
        <div className="col-md-7 mb-5">
          <h2 className="heading" data-aos="fade-up">Leadership</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="block-2">
            <div className="flipper">
              <div className="front"  style={{backgroundImage:'url(${bgResim3})' ,dataStellarBackgroundRatio:"0.5"}}>
                <div className="box">
                  <h2>Will Peters</h2>
                  <p>President</p>
                </div>
              </div>
              <div className="back">
                {/* <!-- back content --> */}
                <blockquote>
                  <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                </blockquote>
                <div className="author d-flex">
                  <div className="image mr-3 align-self-center">
                    <img src={person3} alt=""></img>
                  </div>
                  <div className="name align-self-center">Will Peters <span className="position">President</span></div>
                </div>
              </div>
            </div>
          </div> 
          {/* <!-- .flip-container --> */}
        </div>

        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="block-2"> 
          {/* <!-- .hover --> */}
            <div className="flipper">
              <div className="front"  style={{backgroundImage:'url(${personResim})' ,dataStellarBackgroundRatio:"0.5"}}>
                <div className="box">
                  <h2>Jane Williams</h2>
                  <p>Business Manager</p>
                </div>
              </div>
              <div className="back">
                {/* <!-- back content --> */}
                <blockquote>
                  <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                </blockquote>
                <div className="author d-flex">
                  <div className="image mr-3 align-self-center">
                    <img src={person1} alt=""></img>
                  </div>
                  <div className="name align-self-center">Jane Williams <span className="position">Business Manager</span></div>
                </div>
              </div>
            </div>
          </div>
           {/* <!-- .flip-container --> */}
        </div>

        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="block-2">
            <div className="flipper">
              <div className="front"  style={{backgroundImage:'url(${personResim2})' ,dataStellarBackgroundRatio:"0.5"}}>
                <div className="box">
                  <h2>Jeffrey Neddery</h2>
                  <p>Marketing Director</p>
                </div>
              </div>
              <div className="back">
                {/* <!-- back content --> */}
                <blockquote>
                  <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                </blockquote>
                <div className="author d-flex">
                  <div className="image mr-3 align-self-center">
                    <img src={person2} alt=""></img>
                  </div>
                  <div className="name align-self-center">Jeffrey Neddery <span className="position">Marketing Director</span></div>
                </div>
              </div>
            </div>
          </div> 
          {/* <!-- .flip-container --> */}
        </div>
      </div>
    </div>
    {/* <!-- END .block-2 --> */}

    <section className="section slider-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">Photos</h2>
            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-12">
            <div className="home-slider mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="slider-item">
                <a href="images/slider-1.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider1} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-2.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider2} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-3.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider3} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-4.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider4} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-5.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider5} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-6.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider6} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-7.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider7} alt="Image placeholder" className="img-fluid"></img></a>
              </div>
            </div>
            {/* <!-- END slider --> */}
          </div>
        
        </div>
      </div>
    </section>
    {/* <!-- END section --> */}

    <div className="section">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7 mb-5">
            <h2 className="heading" data-aos="fade">History</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="timeline-item" date-is='2019' data-aos="fade">
              <h3>More Branches Worldwide</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            
            <div className="timeline-item" date-is='2011' data-aos="fade">
              <h3>Company Full Blast</h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
            
            <div className="timeline-item" date-is='2008' data-aos="fade">
              <h3>The Birth of the Company</h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
        

      </div>
    </div>

    
    
    <section className="section bg-image overlay" style={{backgroundImage:`url(${bgResim4})` ,dataStellarBackgroundRatio:"0.5"}}>
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
</>
    );
}
export default About;