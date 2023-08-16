import React from 'react';
import MyButton from './components/sizeRecommender/button.js'
import OutfitRecommenderButton from './components/outfitRecommender/outfitRecommendations.jsx';
import Delivery from './components/outfitRecommender/outfit_delivery.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Walmart In-Store Experience</h1>
      </header>
      <body>
      <OutfitRecommenderButton />

      <Delivery/>
      </body>
      
    </div>
  );
}



export default App;












