import React from 'react';
import MyButton from './components/sizeRecommender/button.js'
import OutfitRecommenderButton from './components/outfitRecommender/outfitRecommendations.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My MERN App!</h1>
        <p>This is the client-side of the MERN application.</p>
        <MyButton />
        <OutfitRecommenderButton />
      </header>
    </div>
  );
}

export default App;












