import React from "react";
import Wiki from "./components/Wiki";
import Investment from "./components/Investment"

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
export default function App() {
  return (
      <BrowserRouter className="flex">
        <nav className="space-x-5 text-2xl font-semibold m-3 right-0 top-0 absolute ">
          <Link to="/wiki" className="hover:text-gray-400 text-4xl md:text-5xl xl:text-6xl">
            1
          </Link>

        </nav>
        <Routes>
          <Route path="/" element={<Wiki />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/investment" element={<Investment />} />
        </Routes>
      </BrowserRouter>

  );
}
