import React, { useEffect, useState } from "react";

export default function DeliveryPage() {
  const [stores, setStores] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "피자,파스타", "치킨", "짜장,짬뽕", "커피,음료"];

  useEffect(() => {
    fetch("/data/stores.json")
      .then(res => res.json())
      .then(data => {
        const shuffled = shuffleArray(data);
        setStores(shuffled);
      });
  }, []);

  function shuffleArray(array) {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  const filteredStores =
    selectedCategory === "전체"
      ? stores
      : stores.filter(store => store.category === selectedCategory);

  return (
    <div className="pt-[90px] px-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-6 font-hamji">
        함지맛지도(근처배달)
      </h1>

      <p className="text-sm text-gray-600 text-center max-w-md mx-auto mb-6 leading-relaxed">
        '배달의민족'으로 바로 연결됩니다. <br />
        바로결제 시 배송지를 <strong>운영본부</strong>로 시키시면 별도의 배달기사님과의 만남 없이 빠르게 운영본부에서 픽업 가능합니다!<br />
        <strong>만나서 결제</strong> 시에는 배달기사님 도착 시 결제해주셔야 합니다.
      </p>

      {/* 카테고리 탭 */}
      <div className="flex justify-center gap-2 flex-wrap mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-semibold border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 매장 리스트 */}
      <div className="space-y-8">
        {filteredStores.map(store => (
          <div key={store.id} className="p-4 border rounded-lg shadow-sm">
            {/* 메뉴 이미지 랜덤 출력 */}
            <div className="overflow-x-auto whitespace-nowrap pb-2 flex gap-2">
              {Array.isArray(store.images) &&
                [...store.images]
                  .sort(() => 0.5 - Math.random())
                  .map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${store.name} 메뉴 ${idx + 1}`}
                      className="h-24 w-24 object-cover rounded"
                    />
                  ))}
            </div>

            <p className="mt-3 text-gray-700 text-sm">{store.description}</p>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center space-x-3">
                <img
                  src={store.logo}
                  alt="로고"
                  className="rounded-full border object-cover w-10 h-10"
                />
                <span className="font-semibold text-gray-900">
                  {store.name}
                </span>
              </div>
              <a
                href={store.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-[#02C2C7] hover:bg-[#0199a0] text-white text-sm font-bold py-1 px-4 rounded-full"
              >
                주문하기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
