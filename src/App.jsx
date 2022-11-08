import React from "react";
import Header from "../components/Layout/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "../components/Sections/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
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
