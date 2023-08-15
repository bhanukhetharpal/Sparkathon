import React, { useEffect, useState } from "react";
import fetchApiData from "../../api/outfitRecommender";
import LinkComponent from "./linkComponent";
import "../../styles/outfitRecommenderStyle.css";
const OutfitRecommenderButton = () => {
  const [apiData, setApiData] = useState(null);
  const [query, setQuery] = useState("");
  const handleButtonClick = async () => {
    try {
      const data = await fetchApiData(query);
      setApiData(data); // Handle the data in your component's state
      console.log(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
       <div className="label">
        <div className="OUTFIT">OUTFIT RECOMMENDATIONS</div>
      <p className="just-scan-the">JUST SCAN THE BARCODE ON THE PRODUCT, AND SEE WHAT WOULD GO BEST WITH IT!</p>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleButtonClick}>Outfit Recommendation Button</button>

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
