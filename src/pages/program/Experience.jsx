import React from "react";

export default function Experience() {
  return (
    <div className="pt-[30px] px-4 bg-white min-h-screen text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 font-hamji">부대 프로그램</h1>
      <img
        src="/experience.jpg"
        alt="부대 프로그램 이미지"
        className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
