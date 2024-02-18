

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../css/customNavbar.css';

// // const CustomNavbar = ({ isNavbarOpen }) => {
// //   return (
// //     <div className={`site-navbar ${isNavbarOpen ? 'open' : ''}`}>
// //       <div className="container">
// //         <div className="row align-items-center">
// //           <div className="col-12">
// //             <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
// //             <Link to="/" style={{fontSize:"30px", textDecoration:"none"}}>Tardis Hotel</Link>
// //           <div style={{fontSize:"40px",cursor:"pointer"}}>X</div>
// //             </div>
          
// //             <nav className="site-navigation text-right" role="navigation">
// //               <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              
// //                 <li><Link to="/" className="nav-link">Home</Link></li>
// //                 <li><Link to="/about" className="nav-link">About Us</Link></li>
// //                 <li><Link to="/rooms" className="nav-link">Rooms</Link></li>
// //                 <li><Link to="/events" className="nav-link">Events</Link></li>
// //                 <li><Link to="/reservation" className="nav-link">Reservation</Link></li>
// //                 <li><Link to="/login" className="nav-link">Login</Link></li>
// //                 <li><Link to="/contact" className="nav-link">Contact</Link></li>
// //                 {/* Diğer menü öğelerini buraya ekleyebilirsiniz */}
// //               </ul>
// //             </nav>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomNavbar;
// // CustomNavbar.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../css/customNavbar.css';

// const CustomNavbar = () => {
//   const [isNavbarOpen, setNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setNavbarOpen(!isNavbarOpen);
//   };

//   return (
//     <div className={`site-navbar ${isNavbarOpen ? 'open' : ''}`}>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-12">
//             <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
//               <Link to="/" style={{ fontSize: "30px", textDecoration: "none" }}>Tardis Hotel</Link>
//               <div style={{ fontSize: "40px", cursor: "pointer" }} onClick={toggleNavbar}>X</div>
//             </div>

//             <nav className="site-navigation text-right" role="navigation">
//               <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
//                 <li><Link to="/" className="nav-link">Home</Link></li>
//                 <li><Link to="/about" className="nav-link">About Us</Link></li>
//                 <li><Link to="/rooms" className="nav-link">Rooms</Link></li>
//                 <li><Link to="/events" className="nav-link">Events</Link></li>
//                 <li><Link to="/reservation" className="nav-link">Reservation</Link></li>
//                 <li><Link to="/login" className="nav-link">Login</Link></li>
//                 <li><Link to="/contact" className="nav-link">Contact</Link></li>
//                 {/* Diğer menü öğelerini buraya ekleyebilirsiniz */}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomNavbar;
// CustomNavbar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/customNavbar.css';

const CustomNavbar = ({ isNavbarOpen, closeNavbar }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const handleMenuToggle = () => {
    setCurrentPage(location.pathname);
    closeNavbar(); // Navbar'ı kapat
  };

  return (
    <div className={`site-navbar ${isNavbarOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Link to="/" style={{ fontSize: "30px", textDecoration: "none" }}>Sogo Hotel</Link>
              <div style={{ fontSize: "30px", cursor: "pointer" }} onClick={handleMenuToggle}>X</div>
            </div>

            <nav className="site-navigation text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className={currentPage === '/' ? 'active' : ''}><Link to="/" className="nav-link">Home</Link></li>
                <li className={currentPage === '/about' ? 'active' : ''}><Link to="/about" className="nav-link">About Us</Link></li>
                <li className={currentPage === '/rooms' ? 'active' : ''}><Link to="/rooms" className="nav-link">Rooms</Link></li>
                <li className={currentPage === '/events' ? 'active' : ''}><Link to="/events" className="nav-link">Events</Link></li>
                <li className={currentPage === '/reservation' ? 'active' : ''}><Link to="/reservation" className="nav-link">Reservation</Link></li>
                <li className={currentPage === '/login' ? 'active' : ''}><Link to="/login" className="nav-link">Login</Link></li>
                <li className={currentPage === '/contact' ? 'active' : ''}><Link to="/contact" className="nav-link">Contact</Link></li>
                {/* Diğer menü öğelerini buraya ekleyebilirsiniz */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
