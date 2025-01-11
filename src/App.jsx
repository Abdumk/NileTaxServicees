import './App.css'
import Header from './components/Header/Header';
import TawkToWidget from "./services/TawkToWidget";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';





function App() {


  return (
    <> 
    <div>
      {/* Other components */}
      <Header />
    <Home />
      <TawkToWidget />
      <Footer />
    </div>
    </>
  )
}

export default App
