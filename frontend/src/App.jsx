import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from "./components/context/GlobalStateContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Collections from "./components/pages/Collections";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Sectors from "./components/pages/Sectors";
import SectorDetail from "./components/pages/SectorDetail";
import Customization from "./components/pages/Customization";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/:sectorName" element={<SectorDetail />} />
              <Route path="/customization" element={<Customization />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
