import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import "./components/index.css"
import CodingPlatforms from "./components/coding_platforms";
import MainPage from "./components/mainpage";
import Websites from "./components/websites";
import Blog from "./components/blog"
import "./components/index.css";

import data from "./data.json";

function App() {
  return (
    <BrowserRouter>
          <Navbar name={data.name} />
      <Routes>
              <Route path="/" element={< MainPage data={data} />} />
              <Route path="/coding-platforms" element={<CodingPlatforms />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;