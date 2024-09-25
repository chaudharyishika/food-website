import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from "./Pages/Place Order/Placeorder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPage/LoginPopup";
function App(){
  const [showLogin,setShowlogin] = useState(false);
  return(<>
   {showLogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
   <div className="app">
   <Navbar setShowlogin={setShowlogin}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/order" element={<Placeorder/>}/>
   </Routes>
   </div>
   <Footer/>
   </>
  );
}
export default App;




















