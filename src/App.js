// Notre composant est App et on pourra l'exporter n'importe ou
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    {/* Creation des pages */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* Path='*' fonctionne si jamais l'url ne correspond à rien de déclarer au dessus */}
    <Route path="*" element={<Home />} />
  </Routes>
  </BrowserRouter>
  );
};

export default App;

