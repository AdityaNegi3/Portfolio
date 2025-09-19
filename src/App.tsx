// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// pages
import Page from "./components/page"; // adjust path if your page.tsx is elsewhere

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Projects page */}
        <Route path="/projects" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
