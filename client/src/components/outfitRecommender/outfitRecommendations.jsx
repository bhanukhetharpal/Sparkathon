import React, { useEffect, useState } from "react";
import fetchApiData from "../../api/outfitRecommender";
import LinkComponent from "./linkComponent";
import "../../styles/outfitRecommenderStyle.css";
import BarcodeScanner from "./barcodeScanner";
const OutfitRecommenderButton = () => {
  const [apiData, setApiData] = useState(null);
  const [query, setQuery] = useState("");
  const [receivedBarcode, setReceivedBarcode] = useState(null);
  useEffect(() => {
    // Handle fetching data based on receivedBarcode here
    if (receivedBarcode) {
      fetchDataFromApi(receivedBarcode);
    }
  }, [receivedBarcode]);

  const fetchDataFromApi = async (barcode) => {
    try {
      const data = await fetchApiData(barcode);
      setApiData(data);
      console.log(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScan = (barcode) => {
    setReceivedBarcode(barcode + "outfit");
  };

  return (
    <div>
      <div className="label">
        <div className="outfitHeading">OUTFIT RECOMMENDATIONS</div>
        <p className="just-scan-the">
          JUST SCAN THE BARCODE ON THE PRODUCT, AND SEE WHAT WOULD GO BEST WITH
          IT!
        </p>
      </div>
      <div id="reader" width="600px">
        <BarcodeScanner onScan={handleScan} />
      </div>

      {/* render all the pinterest links */}
      <div className="link-container">
        {apiData &&
          apiData.map((item, index) => (
            <LinkComponent key={index} pinterestLink={item.link} />
          ))}
      </div>
    </div>
  );
};

export default OutfitRecommenderButton;
