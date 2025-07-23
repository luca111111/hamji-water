import React from "react";

export default function Rest() {
  return (
    <div className="pt-[40px] px-4 bg-white min-h-screen text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 font-hamji">휴식존</h1>
      <img
        src="/rest.jpg"
        alt="휴식존 이미지"
        className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
