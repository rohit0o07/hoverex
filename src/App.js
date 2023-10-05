import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import First from "./components/first";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Content />
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Routes>
          <Route path="/" element={<home />}>
            Home
          </Route>
          <Route path="Pages" element={<pages />}>
            Pages
          </Route>
          <Route path="Features" element={<features />}>
            Features
          </Route>
          <Route path="Store" element={<store />}>
            Store
          </Route>
          <Route path="Blog" element={<blog />}>
            Blog
          </Route>
          <Route path="Contact" element={<contact />}>
            Contact
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
