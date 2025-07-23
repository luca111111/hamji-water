import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 메인 페이지들
const HomePage = lazy(() => import("./HomePage"));
const About = lazy(() => import("./pages/About"));
const MapInfo = lazy(() => import("./pages/MapInfo"));
const Delivery = lazy(() => import("./pages/delivery"));
const StoreDetail = lazy(() => import("./pages/delivery/[id]"));
const NearbyPage = lazy(() => import("./pages/nearby/NearbyPage"));

// 프로그램 탭 구조
const ProgramLayout = lazy(() => import("./pages/program/ProgramLayout"));
const Stage = lazy(() => import("./pages/program/Stage"));
const Water = lazy(() => import("./pages/program/Water"));
const Experience = lazy(() => import("./pages/program/Experience"));
const Unit = lazy(() => import("./pages/program/Unit"));

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
          <Route path="/nearby" element={<NearbyPage />} />

          {/* 프로그램 탭 라우팅 구조 */}
          <Route path="/program" element={<ProgramLayout />}>
            <Route index element={<Stage />} />
            <Route path="stage" element={<Stage />} />
            <Route path="water" element={<Water />} />
            <Route path="experience" element={<Experience />} />
            <Route path="unit" element={<Unit />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
