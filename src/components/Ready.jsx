import React from "react";

export default function Ready() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <img
        src="/ready.png"
        alt="페이지 준비중"
        className="max-w-xs w-full mb-6"
      />
    </div>
  );
}
