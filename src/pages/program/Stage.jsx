import React from "react";

export default function Stage() {
  return (
    <div className="pt-[40px] px-4 bg-white min-h-screen text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 font-hamji">메인무대 프로그램</h1>
      <img
        src="/stage.jpg"  // ❗ 앞에 public 쓰면 안됨!
        alt="무대 프로그램 이미지"
        className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
