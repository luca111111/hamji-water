import { useState } from 'react';

export default function AdminPage() {
  const [form, setForm] = useState({
    id: '',
    name: '',
    phone: '',
    logo: '',
    description: '',
    images: ['', '', '', '', ''],
    payments: [],
  });

  const updateField = (field, value) => setForm({ ...form, [field]: value });

  const togglePayment = (type) => {
    setForm({
      ...form,
      payments: form.payments.includes(type)
        ? form.payments.filter(p => p !== type)
        : [...form.payments, type],
    });
  };

  const handleSubmit = () => {
    const json = JSON.stringify(form, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${form.id || 'new-store'}.json`;
    a.click();
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">가게 추가</h1>
      <input className="border p-2 w-full" placeholder="id" onChange={(e) => updateField('id', e.target.value)} />
      <input className="border p-2 w-full" placeholder="상호명" onChange={(e) => updateField('name', e.target.value)} />
      <input className="border p-2 w-full" placeholder="전화번호" onChange={(e) => updateField('phone', e.target.value)} />
      <input className="border p-2 w-full" placeholder="로고 경로" onChange={(e) => updateField('logo', e.target.value)} />
      <textarea className="border p-2 w-full" placeholder="가게 설명" onChange={(e) => updateField('description', e.target.value)} />
      {[0, 1, 2, 3, 4].map(i => (
        <input key={i} className="border p-2 w-full" placeholder={`음식 이미지 ${i + 1}`} onChange={(e) => {
          const imgs = [...form.images]; imgs[i] = e.target.value;
          updateField('images', imgs);
        }} />
      ))}
      <div className="flex space-x-2">
        {['card', 'cash', 'wire'].map(type => (
          <button
            key={type}
            onClick={() => togglePayment(type)}
            className={`px-3 py-1 border rounded-full ${form.payments.includes(type) ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            {type}
          </button>
        ))}
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded" onClick={handleSubmit}>JSON 파일로 저장</button>
    </div>
  );
}
