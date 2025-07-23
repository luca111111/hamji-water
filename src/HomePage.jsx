import React, { useState, useEffect, Suspense } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ready from "./components/Ready";
import Banner from "./components/Banner";
import About from "./pages/About";
import DeliveryPage from "./pages/delivery";
import MapInfo from "./pages/MapInfo";
  
export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    if (location.pathname !== path) {
      setFade(true);
      setShowSplash(true);
      setNextRoute(path);
    }
  };

  useEffect(() => {
    if (showSplash && nextRoute) {
      const timeout = setTimeout(() => {
        navigate(nextRoute);
        setFade(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [showSplash, nextRoute, navigate]);
  useEffect(() => {
    setShowSplash(false);
  }, [location.pathname]);

  return (
    <div className={fade ? "opacity-0 transition-opacity duration-500" : "opacity-100 transition-opacity duration-500"}>
      {/* Navbar 고정 */}
      <div className="fixed top-0 w-full z-50">
        <Navbar onNavigate={navigateTo} />
      </div>

      {/* 메인 영역 */}
      <Suspense
        fallback={
          <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#02C2C7] animate-bounceDot"
                  style={{ animationDelay: `${i * 0.2}s`, animationDuration: "1.5s" }}
                />
              ))}
            </div>
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <main className="bg-white">
                {/* 배너 */}
                <div className="pt-[10px]"> {/* 메뉴 높이 고려 */}
                  <Banner />
                </div>
                {/* 영상 */}
                <div className="w-full h-[calc(100dvh-124px)] relative overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/waterfest-promo-mobile.mp4" type="video/mp4" />
                  </video>
                </div>
              </main>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/stage" element={<Ready />} />
          <Route path="/water" element={<Ready />} />
          <Route path="/experience" element={<Ready />} />
          <Route path="/rest" element={<Ready />} />
          <Route path="/map-info" element={<MapInfo />} />
          <Route path="/delivery" element={<DeliveryPage />} />
        </Routes>
      </Suspense>

      {/* 로딩 중 스플래시 */}
      {showSplash && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-[#02C2C7] animate-bounceDot"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: "1.2s" }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 인스타/스크롤업 버튼 */}
      <a
        href="https://www.instagram.com/hamji_waterfest"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-24 z-50"
      >
        <img src="/instagram.avif" alt="Instagram" className="w-12 h-12 rounded-full shadow-lg" />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-4 bottom-40 z-50 bg-white text-black border rounded-full w-12 h-12 text-lg shadow-md flex items-center justify-center"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
