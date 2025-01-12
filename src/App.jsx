import './App.css'
import Header from './components/Header/Header';
import TawkToWidget from "./services/TawkToWidget";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import OurService from './components/OurService/OurService';
import About from './components/About/About';
import Miniheader from './components/Miniheader/Miniheader';





function App() {


  return (
    <> 
    <div>
      {/* Other components */}
      
      <Header />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<OurService />} />
          <Route path="/about" element={<About />} />



        </Routes>
      
      <TawkToWidget />
      <Footer />
    </div>
    </>
  )
}

export default App
