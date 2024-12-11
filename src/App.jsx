import React from "react";
// import Navbar from "./pages/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DexProvider from "./pages/Context";

import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <DexProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DexProvider>
  );
};

export default App;
