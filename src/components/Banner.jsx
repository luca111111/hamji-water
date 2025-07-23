import React from "react";

export default function Banner() {
  return (
    <div
      className="w-full bg-white pt-16" // 상단 메뉴 높이만큼 padding
      style={{
        zIndex: 40,
      }}
    >
      <img
        src="/banner.jpg"
        alt="워터페스티벌 배너"
        className="w-full h-auto block"
      />
    </div>
  );
}
