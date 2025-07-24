import React from "react";
import FadeInPage from "../components/FadeInPage";

export default function About() {
  return (
    <FadeInPage>
      <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen pt-28 pb-12 px-4 md:px-8">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl text-[#02C2C7] mb-4 font-hamji">
            함지공원 워터페스티벌
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-semibold mb-10">
            올여름, 도심 속 가장 짜릿한 물축제가 시작된다!
          </p>
        </section>

        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-12 text-left text-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-[#02C2C7]">행사 개요</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <strong>📅 기간:</strong> 2025년 07월 26(토) 10:00~16:00
            </li>
            <li>
              <strong>📍 장소:</strong> 대구광역시 북구 동암로38길12 함지근린공원
            </li>
            <li>
              <strong>🎤 주최:</strong> 대구광역시 북구청
            </li>
            <li>
              <strong>🤝 주관:</strong> 구암동행정복지센터｜구암동주민자치위원회
            </li>
            <li>
              <strong>✨ 후원:</strong> 대구광역시
            </li>
            <li>
              <strong>📞 문의:</strong> 053-665-3321
            </li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-12 text-left text-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-[#02C2C7]">축제 소개</h2>
          <p className="mb-4">
            "2025 함지공원 워터페스티벌"은 가족 단위 방문객과 지역 주민을 위한 여름 물놀이 문화 축제로,
            도심 속 공원에서 누구나 시원하고 즐겁게 물놀이를 즐길 수 있는 기회를 제공합니다.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>온가족이 함께 즐길 수 있는 물놀이장</li>
            <li>아이들을 위한 체험 부스와 시민 참여 프로그램</li>
            <li>플리마켓 & 쉼터 등 편의 공간 제공</li>
            <li>다양한 공연과 퍼포먼스 이벤트</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#02C2C7]">축제 포스터</h2>
          <img
            src="/hamjiposter.jpg"
            alt="2025 함지공원 워터페스티벌 포스터"
            className="mx-auto mb-4 rounded-lg shadow-md w-full max-w-md"
          />
          <a
            href="/hamjiposter.jpg"
            download
            className="inline-block bg-[#02C2C7] hover:bg-[#029fa1] text-white font-semibold py-2 px-6 rounded-full shadow-md"
          >
            포스터 다운로드
          </a>
        </section>

      <section className="max-w-3xl mx-auto mt-16 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-xs mb-1">주최</span>
            <img src="/sponsor-logo.png" alt="주최 로고" className="h-5" />
          </div>
          <div className="flex flex-col items-center text-black text-base font-semibold">
            <span className="text-xs mb-1">주관</span>
            <span>구암동행정복지센터</span>
            <span>구암동주민자치위원회</span>
          </div>
          <div className="flex flex-col items-center text-black text-base font-semibold mt-2">
            <span className="text-xs mb-1">후원</span>
            <img src="/daegu.png" alt="대구시 로고" className="h-6" />
          </div>
          <div className="flex flex-col items-center text-black text-base font-semibold mt-2 whitespace-pre-line">
            <span className="text-xs mb-1">협찬</span>
            <span className="text-center">
              에이스새마을금고{"\n"}
              효성파머스마켓{"\n"}
              BBS강북지회{"\n"}
              함지공원상가번영회
            </span>
          </div>
        </div>
      </section>
      </div>
    </FadeInPage>
  );
}
