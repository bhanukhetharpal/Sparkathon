import React, { useEffect, useState } from "react";
import fetchApiData from "../../api/outfitRecommender";
import LinkComponent from "./linkComponent";
import "../../styles/outfitRecommenderStyle.css";
import BarcodeButton from "./barcodeButton";

const OutfitRecommenderButton = ({ id }) => {
  const [apiData, setApiData] = useState(null);
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
    <section id={id}>
      <div>
        <div className="label">
          <div className="outfitHeading">OUTFIT RECOMMENDATIONS</div>
          <p className="just-scan-the">
            JUST SCAN THE BARCODE ON THE PRODUCT, AND SEE HOW YOU CAN STYLE IT!
          </p>
        </div>
        <BarcodeButton onScan={handleScan}/>
        {/* render all the pinterest links */}
        <div className="link-container">
          {apiData &&
            apiData.map((item, index) => (
              <LinkComponent key={index} pinterestLink={item.link} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OutfitRecommenderButton;
