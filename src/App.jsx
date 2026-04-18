import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import "./components/index.css"
import CodingPlatforms from "./components/coding_platforms";
import MainPage from "./components/mainpage";
import Websites from "./components/websites";
import Blog from "./components/blog"
import "./components/index.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< MainPage />} />
        <Route path="/coding-platforms" element={<CodingPlatforms />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;