
import React from "react";
import bgResim from "../images/hero_4.jpg";
import food1 from "../images/food-1.jpg";
import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";
import slider4 from "../images/slider-4.jpg";
import slider5 from "../images/slider-5.jpg";
import slider6 from "../images/slider-6.jpg";
import slider7 from "../images/slider-7.jpg";
import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";
import person3 from "../images/person_3.jpg";
import menu from "../images/menu.png";
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

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import Reservation from "./Reservation";
import jQuery from "jquery";
import Aos from "aos";
import CheckAvailability from "./CheckAvailability";
import CustomNavbar from "./CustomNavbar";
import { useState } from "react";

function Home(){
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

    <section className="site-hero overlay" style={{backgroundImage:{bgResim} ,dataStellarBackgroundRatio:"0.5"}}>
      <div className="container">
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-10 text-center" data-aos="fade-up">
            <span className="custom-caption text-uppercase text-white d-block  mb-3">Welcome To Sogo <span className="fa fa-star text-primary"></span>   Hotel</span>
            <h1 className="heading">A Best Place To Stay</h1>
          </div>
        </div>
      </div>

      {/* <a className="mouse smoothscroll" href="#next">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </a> */}
    </section>
    /* END section */}

    <CheckAvailability></CheckAvailability>

    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
            <figure className="img-absolute">
              <img src={food1} alt="Image" className="img-fluid"/>
            </figure>
            <img src={img1} alt="Image" className="img-fluid rounded"/>
          </div>
          <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
            <h2 className="heading">Welcome!</h2>
            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><Link  to="/about" onClick={() => navigate("/about")} className="btn btn-primary text-white py-2 mr-3">Learn More</Link> <span className="mr-3 font-family-serif"></span></p>
          
          </div>
          
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img1} alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Single Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img2} alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Family Room</h2>
                <span className="text-uppercase letter-spacing-1"></span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src={img3} alt="Free website template" className="img-fluid mb-3"/>
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
    
    
    <section className="section slider-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">Photos</h2>
            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="home-slider  mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="slider-item">
                <a href={slider1} data-fancybox="images" data-caption="Caption for this image"><img src={slider1} alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-2.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider2} alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-3.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider3} alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-4.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider4} alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-5.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider5} alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-6.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider6} alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images/slider-7.jpg" data-fancybox="images" data-caption="Caption for this image"><img src={slider7} alt="Image placeholder" className="img-fluid"/></a>
              </div>
            </div>
            {/* END slider */}
          </div>
        
        </div>
      </div>
    </section>
    {/* END section */}
    
    <section className="section bg-image overlay" style={{backgroundImage:`url(${food1})` ,dataStellarBackgroundRatio:"0.5"}}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading text-white" data-aos="fade">Our Restaurant Menu</h2>
            <p className="text-white" data-aos="fade" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="food-menu-tabs" data-aos="fade">
          <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active letter-spacing-2" id="mains-tab" data-toggle="tab" href="#mains" role="tab" aria-controls="mains" aria-selected="true">Mains</a>
            </li>
            <li className="nav-item">
              <a className="nav-link letter-spacing-2" id="desserts-tab" data-toggle="tab" href="#desserts" role="tab" aria-controls="desserts" aria-selected="false">Desserts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link letter-spacing-2" id="drinks-tab" data-toggle="tab" href="#drinks" role="tab" aria-controls="drinks" aria-selected="false">Drinks</a>
            </li>
          </ul>
          <div className="tab-content py-5" id="myTabContent">
            
            
            <div className="tab-pane fade show active text-left" id="mains" role="tabpanel" aria-labelledby="mains-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Murgh Tikka Masala</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Fish Moilee</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Safed Gosht</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">French Toast Combo</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Vegie Omelet</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Chorizo &amp; Egg Omelet</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              

            </div> {/* .tab-pane */}

            <div className="tab-pane fade text-left" id="desserts" role="tabpanel" aria-labelledby="desserts-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Banana Split</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Sticky Toffee Pudding</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Pecan</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Apple Strudel</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Pancakes</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Ice Cream Sundae</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div> {/* .tab-pane */}
            <div className="tab-pane fade text-left" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Spring Water</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Coke, Diet Coke, Coke Zero</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Orange Fanta</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Lemonade, Lemon Squash</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Sparkling Mineral Water</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3"></span>
                    <h3 className="text-white"><a href="#" className="text-white">Lemon, Lime &amp; Bitters</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div> {/* .tab-pane */}
          </div>
        </div>
      </div>
    </section>
    
    {/* END section */}
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">People Says</h2>
          </div>
        </div>
        <div className="row">
          <div className="js-carousel-2 mb-5" data-aos="fade-up" data-aos-delay="200">
            
            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src={person1} alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>

                <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; Jean Smith</em></p>
            </div> 

            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src={person2} alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>
                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>

            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src={person3} alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>

                <p>&ldquo;When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>

          </div>
            {/* END slider */}
        </div>

      </div>
    </section>
    <section className="section bg-image overlay"style={{backgroundImage:`url(${bgResim})` ,dataStellarBackgroundRatio:"0.5"}}>
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 className="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
            
      
            <a href="/reservation" class="btn btn-outline-white-primary py-3 text-white px-5">Reserve Now</a>
            </div>
          </div>
        </div>
      </section>

   <Footer></Footer>
    </>
    );
}
    export default Home;