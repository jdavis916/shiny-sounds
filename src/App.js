//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, 
  Store, 
  Signup,
  Signout,
  Cart,
  Faq,
  Contact} from "./pages"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signout" element={<Signout />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <section>
        
      </section>
    </div>
  );
}

export default App;
