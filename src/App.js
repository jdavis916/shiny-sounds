//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
//import Header from "./components/Header";
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
import {Home, 
  Store, 
  Signup,
  Signout,
  Cart,
  Faq,
  Contact} from "./pages"

function App() {
  document.title = "Shiny Sounds";
  return (
    <div>        
        <NavMain />
        {/*<Header />*/}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signout" element={<Signout />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
