// import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <>
      <Router>

        <NavBar />

        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/magasin" element={<Magasin/>} />
          <Route path="/avis" element={<Avis/>} />
          <Route path="/some" element={<Some/>} />
          <Route path="/logo" element={<Logo/>} /> 
          <Route path="/plakat" element={<Plakat/>}/> 
          <Route path="/nettside" element={<Nettside/>}/>   
          <Route path="/cv" element={<Cv/>} />
          <Route path="/portfolieside" element={<Portfolieside/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
                


         



        </Routes>

        <Footer/>

      </Router>
    </>
  );
}

export default App;
