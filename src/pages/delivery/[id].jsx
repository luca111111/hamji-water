import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function StoreDetail() {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch('/data/stores.json')
      .then(res => res.json())
      .then(data => {
        const match = data.find(s => s.id === id);
        setStore(match);
      });
  }, [id]);

  if (!store) return <div className="p-6 text-center">가게 정보를 불러오는 중입니다...</div>;

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600">{store.name}</h1>
      <div className="overflow-x-auto whitespace-nowrap pb-3">
        {store.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            className="inline-block mr-3 rounded-lg border"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">{store.description}</p>
      <div className="flex items-center space-x-2">
        {['card', 'cash', 'wire'].map(type => (
          <span
            key={type}
            className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
              store.payments.includes(type) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
            }`}
          >
            {type === 'card' ? '카' : type === 'cash' ? '현' : '이'}
          </span>
        ))}
      </div>
      <a href={`tel:${store.phone}`} className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
        전화주문하기
      </a>
    </div>
  );
}