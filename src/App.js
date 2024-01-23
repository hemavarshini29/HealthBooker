import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pagenotfound from "./pages/Pagenotfound";
import AdminLoginPage from './pages/AdminLoginPage';

import React from "react";
import Profile1 from "./pages/Profile1";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          {/* <Route path="/AdminDashboard" element={<AdminDashboard />} /> */}
          {/* <Route path="*" element={<Modalpopup />} /> */}
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/Profile1" element={<Profile1 />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;