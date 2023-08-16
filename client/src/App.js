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
import Delivery from "./components/sizeAvailability/sizeAvailabilty.jsx";
import Footer from "./components/Footer.jsx"; // Import the Footer component

import "./App.css"; // Import your main CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <TitlePage id="title" />
      <hr /> {/* Use the <hr> tag to create a divider */}
      <WhatsHot id="whats-hot" />
      <hr />
      <KnowYourSize id="know-your-size" />
      <hr />
      <OutfitRecommenderButton id="outfit-recommender" />
      <hr />
      <Delivery id="size-availabilty" />
      <Footer />

    </div>
  );
}

export default App;

