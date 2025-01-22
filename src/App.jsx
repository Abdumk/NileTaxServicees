import './App.css';
import Header from './components/Header/Header';
import TawkToWidget from "./services/TawkToWidget";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import OurService from './components/OurService/OurService';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import PrivacyPolicy from './components/privacy policy/privacyPolicy';

function App() {
  return (
    <Router basename="/NileTaxServicees">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<OurService />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pp" element={<PrivacyPolicy />} />
        </Routes>
        <TawkToWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
