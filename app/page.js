"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home/Home";
import AdmissionPage from "@/components/Admission/AdmissionPage";
import Footer from "@/components/Footer";

const app = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default app;
