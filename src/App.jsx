// App.jsx
// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";

// Sider
import { LandingPage } from "./pages/landingPage";
import { Magasin } from "./pages/magasin";
import { Avis } from "./pages/avis";
import { Some } from "./pages/some";
import { Logo } from "./pages/logo";
import { Cv } from "./pages/cv";
import { Portfolieside } from "./pages/portfolieside";
import { Kontakt } from "./pages/kontakt";
import { Plakat } from "./pages/plakat";
import { Nettside } from "./pages/nettside";

/* ---------- ScrollToTop inline (slik unngår vi import-problem) ---------- */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // evt "smooth"
    });
  }, [pathname]);
  return null;
}
/* ----------------------------------------------------------------------- */

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />   {/* alltid til topp ved ruteendring */}
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/magasin" element={<Magasin />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/some" element={<Some />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/plakat" element={<Plakat />} />
          <Route path="/nettside" element={<Nettside />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolieside" element={<Portfolieside />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
