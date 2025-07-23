import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function DeliveryPage() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch('/data/stores.json')
      .then(res => res.json())
      .then(data => setStores(shuffleArray(data)));
  }, []);

  return (
      <div className="pt-[85px] px-4 space-y-10 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* 🟦 상단 배너 */}
      <div className="w-full overflow-hidden rounded-xl shadow mb-6">
        <img src="/market.jpg" alt="배너" className="w-full object-cover" />
      </div>

      <h1 className="text-2xl font-bold text-center text-blue-600 font-hamji">배달 가능한 맛집 리스트</h1>

      {stores.map(store => (
        <div key={store.id} className="bg-white rounded-2xl shadow-xl p-4 border border-blue-100">
          <div className="overflow-x-auto whitespace-nowrap pb-2">
            {store.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${store.name} 메뉴 ${idx + 1}`}
                className="inline-block rounded-xl mr-3 border border-gray-200"
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              />
            ))}
          </div>
          <p className="mt-3 text-gray-700 text-sm italic">{store.description}</p>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center space-x-3">
              <img
                src={store.logo}
                alt="로고"
                className="rounded-full border object-cover"
                style={{ width: '52px', height: '52px' }}
              />
              <Link to={`/delivery/${store.id}`} className="text-xl font-extrabold text-blue-700 hover:underline">
                {store.name}
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              {['card', 'cash', 'wire'].map(type => (
                <span
                  key={type}
                  title={type === 'card' ? '카드결제' : type === 'cash' ? '현금결제' : '계좌이체'}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shadow-sm ${
                    store.payments.includes(type) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {type === 'card' ? '카' : type === 'cash' ? '현' : '이'}
                </span>
              ))}
              <a href={`tel:${store.phone}`} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 text-sm font-semibold">
                전화주문
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* 🟫 안내 문구 */}
      <p className="text-xs text-gray-500 text-center mt-10 px-4">
        ※ 본 사이트는 행사 진행중 동네상권 활성화를 위하여 별도의 운영비 없이 운영되며,<br />
        가게와 통화 연결하여 사용 가능합니다.<br />
        배달 또는 주문 중 문제 또는 궁금한 점은 해당 가게에 문의해주시기 바랍니다.
      </p>
    </div>
  );
}
