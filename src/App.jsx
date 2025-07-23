import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 페이지들
const HomePage = lazy(() => import("./HomePage"));
const About = lazy(() => import("./pages/About"));
const MapInfo = lazy(() => import("./pages/MapInfo"));
const Delivery = lazy(() => import("./pages/delivery"));
const StoreDetail = lazy(() => import("./pages/delivery/[id]"));

// 프로그램 (준비중 이미지)
const ProgramStage = lazy(() => import("./components/Ready"));
const ProgramWater = lazy(() => import("./components/Ready"));
const ProgramExperience = lazy(() => import("./components/Ready"));
const ProgramRest = lazy(() => import("./components/Ready"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div className="p-10 text-center">로딩 중...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/map-info" element={<MapInfo />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/delivery/:id" element={<StoreDetail />} />
          <Route path="/stage" element={<ProgramStage />} />
          <Route path="/water" element={<ProgramWater />} />
          <Route path="/experience" element={<ProgramExperience />} />
          <Route path="/rest" element={<ProgramRest />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
