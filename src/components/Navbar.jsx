
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  {
    key: "info",
    label: "정보",
    links: [
      { to: "/about", label: "축제개요" },
      { to: "/map-info", label: "배치도" },
    ],
  },
  {
    key: "program",
    label: "프로그램",
    links: [
      { to: "/stage", label: "무대프로그램" },
      { to: "/water", label: "물놀이프로그램" },
      { to: "/experience", label: "부대프로그램" },
      { to: "/rest", label: "휴식존" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (key) =>
    setActiveDropdown(activeDropdown === key ? null : key);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <img src="/logo-main.png" alt="로고" className="h-14" />
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="max-w-md mx-auto flex flex-col bg-white border-t px-4 pb-4">
          {MENU_ITEMS.map((item) => (
            <div key={item.key} className="py-2">
              <span
                onClick={() => toggleDropdown(item.key)}
                className={`cursor-pointer font-hamji text-lg flex justify-between items-center ${activeDropdown === item.key ? "text-[#02C2C7] font-bold" : ""}`}
              >
                {item.label} <span>{activeDropdown === item.key ? "▲" : "▼"}</span>
              </span>
              {activeDropdown === item.key && (
                <div className="flex flex-col mt-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-left py-2 px-2 hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/delivery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left py-2 font-hamji text-lg"
          >
            함지맛지도(근처배달)
          </Link>
        </div>
      )}
    </nav>
  );
}
