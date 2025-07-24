import React, { useEffect, useState } from "react";

export default function PopupBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem("popupClosedAt");
    if (!lastClosed) {
      setVisible(true);
      return;
    }

    const now = new Date();
    const lastTime = new Date(parseInt(lastClosed, 10));
    const diff = now - lastTime;

    // 24시간 (ms) = 1000 * 60 * 60 * 24
    if (diff > 1000 * 60 * 60 * 24) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleCloseForDay = () => {
    localStorage.setItem("popupClosedAt", Date.now().toString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
      <div className="relative">
        <img
          src="/pop.jpg"
          alt="팝업 배너"
          className="w-[90vw] max-w-md rounded-lg shadow-lg"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={handleClose}
            className="bg-white bg-opacity-90 text-sm px-3 py-1 rounded-full shadow"
          >
            닫기
          </button>
          <button
            onClick={handleCloseForDay}
            className="bg-white bg-opacity-90 text-sm px-3 py-1 rounded-full shadow"
          >
            24시간 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
