import React, { useState } from "react";
import BarcodeScanner from "../outfitRecommender/barcodeScanner"; // Import the BarcodeScanner component
import "../../styles/barCodeButton.css";
import ProductCard from "../productCard/productCard";
const BarcodeButton = ({ onScan }) => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
     setShowScanner(false);
     setScannedData(data);
     onScan(data);
  };

  return (
    <div className="barcode-button-container">
      <button onClick={() => setShowScanner(true)}>Scan Barcode</button>
      {showScanner && (
        <div id="reader" width="600px">
          <BarcodeScanner onScan={handleScan} />
        </div>
      )}
      {scannedData && <ProductCard productId={scannedData}/>}
    </div>
  );
};

export default BarcodeButton;
