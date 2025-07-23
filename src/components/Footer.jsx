// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600 mt-20 border-t max-w-md mx-auto">
      <div className="flex flex-col items-center gap-4">
        {/* 주최 */}
        <div className="flex flex-col items-center text-black text-base font-semibold">
          <span className="text-xs mb-1">주최</span>
          <img src="/sponsor-logo.png" alt="주최 로고" className="h-5" />
        </div>

        {/* 주관 */}
        <div className="flex flex-col items-center text-[9px] text-black text-base font-semibold">
          <span className="text-xs mb-1">주관</span>
          <span>구암동행정복지센터</span>
          <span>구암동주민자치위원회</span>
        </div>

        {/* 후원 */}
        <div className="flex flex-col items-center text-black text-base font-semibold mt-2">
          <span className="text-xs mb-1">후원</span>
          <img src="/daegu.png" alt="대구시 로고" className="h-6" />
        </div>

        {/* 협찬 */}
        <div className="flex flex-col items-center text-[9px] text-black text-base font-semibold mt-2 whitespace-pre-line text-center">
          <span className="text-xs mb-1">협찬</span>
          <span>
            에이스새마을금고｜효성파머스마켓{"\n"}BBS강북지회｜함지공원상가번영회
          </span>
        </div>

        {/* 카피라이트 */}
        <p className="text-xs text-gray-500 mt-4">
          Copyright ⓒ 2025 함지공원 워터페스티벌
        </p>
      </div>
    </footer>
  );
}
