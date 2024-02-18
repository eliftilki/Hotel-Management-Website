import logo from './logo.svg';
import './App.css';
import index from './components/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Rooms from './components/Rooms';
import ReservationGuest from './components/ReservationGuest';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
     <Routes>
       
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/home" element={<Home/>} />
       <Route exact path="/about" element={<About/>} />
       <Route exact path="/contact" element={<Contact/>} />
       <Route exact path="/reservation" element={<Reservation/>} />
       <Route exact path="/rooms" element={<Rooms/>} />
       <Route exact path="/reservationGuest" element={<ReservationGuest/>} />
       {/* 
       <Route exact path="/konveyor" element={<Konveyor/>} />
       <Route exact path="/makine" element={<Makine/>} />
       <Route exact path="/dijitalkatolog" element={<DijitalKatolog/>} />
       <Route exact path="/iletisim" element={<Iletisim/>} />
       <Route exact path="/kendinTasarla" element={<KendinTasarla/>} />
       <Route exact path="/teorikBilgiler" element={<TeorikBilgiler/>} />
       <Route exact path="cards" element={<Cards/>}/>
       <Route exact path='/urun-detay/:id' element={<UrunDetay/>} /> */}
     </Routes>
   </Router>
 
   </>
  
  );
}

export default App;
