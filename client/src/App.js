import React from "react";
import OutfitRecommenderButton from "./components/outfitRecommender/outfitRecommendations.jsx";
import Header from "./components/header.jsx";
import TitlePage from "./components/titlePage/titlePage.jsx";
import KnowYourSize from "./components/knowYourSize/knowYourSize.jsx";
import WhatsHot from "./components/whatsHot/whatsHot.jsx";
import SizeAvailabilty from "./components/sizeAvailability/sizeAvailabilty.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <TitlePage id="title" />
      <WhatsHot id="whats-hot" />
      <KnowYourSize id="know-your-size" />
      <OutfitRecommenderButton id="outfit-recommender" />
      <SizeAvailabilty id="size-availabilty" />
    </div>
  );
}



export default App;
