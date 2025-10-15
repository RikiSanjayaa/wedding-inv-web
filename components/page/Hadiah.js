import { useState } from "react";

export default function HadiahPernikahan() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-5">
      <div className="bg-white p-8 rounded-[10px] shadow-soft-sakura text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/images/hadiah.png"
            alt="Hadiah Icon"
            className="h-12 w-12"
          />
        </div>
        <h2 className="text-sakura-300 text-2xl md:text-3xl font-bold font-['Comfortaa'] mb-4">
          Hadiah Pernikahan
        </h2>
        <p className="text-gray-600 mb-4">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, kami akan senang hati menerimanya yang tentu akan semakin melengkapi kebahagiaan kami.
        </p>
        <button
          className="bg-sakura-300 text-white py-2 px-4 rounded shadow hover:bg-sakura-400 transition-all"
          onClick={handlePopup}
        >
          Kirim Amplop Digital
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-center text-sakura-300 text-2xl font-bold font-['Comfortaa'] mb-4">
              E-Wallet
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Note: Tap to copy bank number
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sakura-300 font-bold">Asep Irawan</p>
                  <p className="text-gray-600">009 - 0222 2444 21</p>
                </div>
                <button
                  className="text-sakura-300"
                  onClick={() => navigator.clipboard.writeText("009-0222-2444-21")}
                >
                  📋
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sakura-300 font-bold">Putri Amanda</p>
                  <p className="text-gray-600">009 - 0222 2444 21</p>
                </div>
                <button
                  className="text-sakura-300"
                  onClick={() => navigator.clipboard.writeText("009-0222-2444-21")}
                >
                  📋
                </button>
              </div>
            </div>

            <h2 className="text-center text-sakura-300 text-2xl font-bold font-['Comfortaa'] mt-8 mb-4">
              Pemberian Hadiah Office
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Jl. Udayana No.16, Monjok Bar., Kec. Selaparang, Kota Mataram, Nusa Tenggara Bar. 83121
            </p>
            <button
              className="bg-sakura-300 text-white py-2 px-4 rounded shadow hover:bg-sakura-400 transition-all w-full"
              onClick={() => window.open("https://maps.google.com?q=Jl.+Udayana+No.16,+Monjok+Bar.,+Kec.+Selaparang,+Kota+Mataram,+Nusa+Tenggara+Bar.+83121")}
            >
              Open Map
            </button>

            <button
              className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded shadow hover:bg-gray-400 transition-all w-full"
              onClick={handlePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
