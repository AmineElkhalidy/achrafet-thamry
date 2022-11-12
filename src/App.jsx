import React from "react";

// Styling file
import "./App.css";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Header from "./components/Layout/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/aboutUs" exact element={<AboutUs />} />
            <Route path="/contactUs" exact element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
