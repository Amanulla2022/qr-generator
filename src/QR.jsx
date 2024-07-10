import React, { useState } from "react";
import QRCode from "qrcode.react";

const QR = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleGenrateQR = () => {
    setQrValue(text);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-8">
      <h1 className="text-3xl font-bold">QR Code Generator</h1>
      <input
        type="text"
        className="border-2 border-blue-600 w-4/5 m-4 p-3"
        placeholder="Enter text to generate QR code"
        onChange={handleInputChange}
      />
      <button className="bg-blue-500 text-white p-2" onClick={handleGenrateQR}>
        Generate QR Code
      </button>
      {qrValue && <QRCode value={qrValue} className="m-4 w-2/3" />}
    </div>
  );
};

export default QR;
