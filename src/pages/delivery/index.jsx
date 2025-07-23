
import React, { useEffect, useState } from "react";

export default function DeliveryPage() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("/data/stores.json")
      .then(res => res.json())
      .then(data => setStores(data));
  }, []);

  return (
    <div className="pt-[90px] px-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-6 font-hamji">함지맛지도(근처배달)</h1>

      <p className="text-sm text-gray-600 text-center max-w-md mx-auto mb-6 leading-relaxed">
        '배달의민족'으로 바로 연결됩니다. <br />
        바로결제 시 배송지를 <strong>운영본부</strong>로 시키시면 별도의 배달기사님과의 만남 없이 빠르게 운영본부에서 픽업 가능합니다!<br />
        <strong>만나서 결제</strong> 시에는 배달기사님 도착 시 결제해주셔야 합니다.
      </p>

      <div className="space-y-8">
        {stores.map(store => (
          <div key={store.id} className="p-4 border rounded-lg shadow-sm">
            <div className="overflow-x-auto whitespace-nowrap pb-2 flex gap-2">
              {Array.isArray(store.images) &&
                store.images.map((src, idx) => (
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
                <span className="font-semibold text-gray-900">{store.name}</span>
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
