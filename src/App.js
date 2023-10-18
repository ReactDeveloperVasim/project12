import React from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import Contact from "./components/Contact";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product />}/>
      </Routes>
    </BrowserRouter>
    
</>
  );
}

export default App;
