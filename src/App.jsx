import React from "react";
import Header from "../components/Layout/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Sections/Home";
import Products from "../components/Sections/Products";
import AboutUs from "../components/Sections/AboutUs";
import ContactUs from "../components/Sections/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/aboutUs" exact element={<AboutUs />} />
            <Route path="/contactUs" exact element={<ContactUs />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
