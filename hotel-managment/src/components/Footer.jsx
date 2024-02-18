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

import { Link, useNavigate } from "react-router-dom";
function Footer(){
    const navigate=useNavigate();
    return(
        <>
        
    <footer className="section footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 mb-5">
            <ul className="list-unstyled link">
              <li><Link to="/about" onClick={() => navigate("/about")}>About Us<span className="sr-only">(current)</span></Link></li>
              
             <li><Link to="/rooms" onClick={() => navigate("/rooms")}>Rooms<span className="sr-only">(current)</span></Link></li>
             <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="list-unstyled link">
              <li><Link to="/rooms" onClick={() => navigate("/rooms")}>Rooms<span className="sr-only">(current)</span></Link></li>
              <li><Link to="/about" onClick={() => navigate("/about")}>About Us<span className="sr-only">(current)</span></Link></li>
              <li><Link to="/contact" onClick={() => navigate("/contact")}>Contact Us<span className="sr-only"></span></Link></li>
              
            </ul>
          </div>
          <div className="col-md-3 mb-5 pr-md-5 contact-info">
            {/* <li>198 West 21th Street, <br> Suite 721 New York NY 10016</li> */}
            <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span> <span> Marmara Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği T4(Blok) Z06 Maltepe/İstanbul</span></p>
            <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Phone:</span> <span> (+90) 435 3533</span></p>
            <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span> <span> info@domain.com</span></p>
          </div>
          <div className="col-md-3 mb-5">
            <p>Sign up for our newsletter</p>
            <form action="#" className="footer-newsletter">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email..."/>
                <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5">
          <p className="col-md-6 text-left">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
            
          <p className="col-md-6 text-right social">
            <a href="#"><span className="fa fa-tripadvisor"></span></a>
            <a href="#"><span className="fa fa-facebook"></span></a>
            <a href="#"><span className="fa fa-twitter"></span></a>
            <a href="#"><span className="fa fa-linkedin"></span></a>
            <a href="#"><span className="fa fa-vimeo"></span></a>
          </p>
        </div>
      </div>
    </footer>
        </>
    );
}
export default Footer;