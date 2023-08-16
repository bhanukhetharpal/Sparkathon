// import React from "react";
// import OutfitRecommenderButton from "./components/outfitRecommender/outfitRecommendations.jsx";
// import Header from "./components/header.jsx";
// import TitlePage from "./components/titlePage/titlePage.jsx";
// import KnowYourSize from "./components/knowYourSize/knowYourSize.jsx";
// import WhatsHot from "./components/whatsHot/whatsHot.jsx";
// import Delivery from "./components/sizeAvailability/sizeAvailabilty.jsx";
// import "./App.css"; // Import your main CSS file
// import Divider from "./components/divider"; // Import the Divider component

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <TitlePage id="title" />
//       <Divider /> {/* Add the Divider component */}
//       <WhatsHot id="whats-hot" />
//       <Divider />
//       <KnowYourSize id="know-your-size" />
//       <Divider />
//       <OutfitRecommenderButton id="outfit-recommender" />
//       <Divider />
//       <Delivery id="size-availabilty" />
//     </div>
//   );
// }

// export default App;
import React from "react";
import OutfitRecommenderButton from "./components/outfitRecommender/outfitRecommendations.jsx";
import Header from "./components/header.jsx";
import TitlePage from "./components/titlePage/titlePage.jsx";
import KnowYourSize from "./components/knowYourSize/knowYourSize.jsx";
import WhatsHot from "./components/whatsHot/whatsHot.jsx";
import SizeAvailabilty from "./components/sizeAvailability/sizeAvailabilty.jsx";
import Footer from "./components/Footer.jsx"; 
import Divider from "@mui/material/Divider"
import "./App.css"; // Import your main CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <TitlePage id="title" />
      <Divider style={{width:'100%'}} /> 
      <WhatsHot id="whats-hot" />
      <Divider style={{width:'100%'}} /> 
      <KnowYourSize id="know-your-size" />
      <Divider style={{width:'100%'}} /> 
      <OutfitRecommenderButton id="outfit-recommender" />
      <Divider style={{width:'100%'}} /> 
      <SizeAvailabilty id="size-availabilty" />
      <Footer />

    </div>
  );
}

export default App;

