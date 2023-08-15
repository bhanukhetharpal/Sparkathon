import React, { useState, useEffect } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

const BarcodeScanner = ({onScan}) => {
  const [scannedBarcode, setScannedBarcode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const containerId = "reader"; // The ID of the container element

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const html5QrcodeScanner = new Html5QrcodeScanner(containerId, config, false);

    const handleScanSuccess = (decodedText, decodedResult) => {
      setScannedBarcode(decodedText);
      console.log(decodedText);
      html5QrcodeScanner.clear(); // Clear scanner after successful scan
      onScan(decodedText);
    };

    const handleScanError = (error) => {
      setErrorMessage(error);
    };

    html5QrcodeScanner.render(handleScanSuccess, handleScanError);
  }, [onScan]);

  return (
    <div>
      <div id={containerId}></div>
      {scannedBarcode && <p>Scanned Barcode: {scannedBarcode}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      
    </div>
  );
};

export default BarcodeScanner;
