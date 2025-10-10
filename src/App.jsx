import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./elements/Footer";
import Home from "./components/Home";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import ProductCategories from "./Product/ProductCategories";
import CategoryCollection from "./Product/Collection";
import ScrollToTop from "./elements/ScrollToTop";
import Header from "./elements/Header";

// Multiple animation variants for different transition types
const pageVariants = {
  fade: {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  },
  slideRight: {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.2 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    in: { opacity: 1, rotateY: 0 },
    out: { opacity: 0, rotateY: -90 },
  },
};

// Transition settings for each type
const pageTransition = {
  fade: { duration: 0.5, ease: "easeInOut" },
  slideLeft: { duration: 0.6, ease: "easeOut" },
  slideRight: { duration: 0.6, ease: "easeOut" },
  scale: { duration: 0.7, ease: "easeInOut" },
  flip: { duration: 0.8, ease: "easeInOut" },
};

// Map routes to specific transition types (customize as needed)
const routeTransitions = {
  "/": "fade",
  "/about": "slideLeft",
  "/contact": "slideRight",
  "/products": "scale",
  "/products/:category": "flip",
};

// Inner component that uses useLocation
function AppContent() {
  const location = useLocation();
  // Select transition type based on the current route
  const transitionType = routeTransitions[location.pathname] || "fade"; // Fallback to fade

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants[transitionType]}
                transition={pageTransition[transitionType]}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants[transitionType]}
                transition={pageTransition[transitionType]}
              >
                <AboutUs />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants[transitionType]}
                transition={pageTransition[transitionType]}
              >
                <ContactUs />
              </motion.div>
            }
          />
          <Route
            path="/products"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants[transitionType]}
                transition={pageTransition[transitionType]}
              >
                <ProductCategories />
              </motion.div>
            }
          />
          <Route
            path="/products/:category"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants[transitionType]}
                transition={pageTransition[transitionType]}
              >
                <CategoryCollection />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
