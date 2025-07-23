// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 페이지 컴포넌트들
const HomePage = lazy(() => import("./HomePage"));
const About = lazy(() => import("./pages/About"));
const MapInfo = lazy(() => import("./pages/MapInfo"));
const Delivery = lazy(() => import("./pages/delivery"));
const StoreDetail = lazy(() => import("./pages/delivery/[id]"));

// 프로그램 페이지 컴포넌트
const ProgramLayout = lazy(() => import("./pages/program/ProgramLayout"));
const Stage = lazy(() => import("./pages/program/Stage"));
const Water = lazy(() => import("./pages/program/Water"));
const Experience = lazy(() => import("./pages/program/Experience"));
const Rest = lazy(() => import("./pages/program/Rest"));

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

          {/* 프로그램 탭 라우팅 */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
