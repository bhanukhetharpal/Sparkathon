import React from 'react';
import MyButton from './components/sizeRecommender/button.js'
import OutfitRecommenderButton from './components/outfitRecommender/outfitRecommendations.jsx';
import Header from './components/header.jsx';
import TitlePage from './components/titlePage/titlePage.jsx';
import KnowYourSize from './components/knowYourSize/knowYourSize.jsx';
import WhatsHot from './components/whatsHot/whatsHot.jsx'
function App() {
  return (
    <div className="App">
      <Header/>
      <body>
      <TitlePage />
      <WhatsHot />
      <KnowYourSize />
      <OutfitRecommenderButton />
      </body>
      
    </div>
  );
}

export default App;












