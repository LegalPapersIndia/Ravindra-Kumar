import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./elements/Footer";
import Home from "./components/Home";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import ProductCategories from "./Product/ProductCategories";
import CategoryCollection from "./Product/Collection";
import ScrollToTop from "../src/elements/ScrollToTop"; // import it
import Header from "./elements/Header";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this here */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<ProductCategories />} />
        <Route path="/products/:category" element={<CategoryCollection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;