import React from "react";

export default function NearbyPage() {
  return (
    <div className="pt-[90px] px-4 bg-white min-h-screen text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 font-hamji">함지맛지도 (근처맛집)</h1>
      <img
        src="/nearby.jpg"
        alt="함지맛지도 이미지"
        className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
