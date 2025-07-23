import React from "react";
import FadeInPage from "../components/FadeInPage";

export default function MapInfo() {
  return (
    <FadeInPage>
      <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen pt-28 pb-20 px-4 md:px-8">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl text-[#02C2C7] mb-8 font-hamji">
            행사장 배치도
          </h1>

          <img
            src="/map.jpg"
            alt="행사장 배치도"
            className="mx-auto rounded-lg shadow-lg mb-6 w-full max-w-md"
          />

          <a
            href="/map.jpg"
            download
            className="inline-block bg-[#02C2C7] hover:bg-[#029fa1] text-white font-semibold py-2 px-6 rounded-full shadow-md"
          >
            배치도 다운로드
          </a>
        </section>
      </div>
    </FadeInPage>
  );
}
