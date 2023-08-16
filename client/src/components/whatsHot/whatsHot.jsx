import React from "react";
import "../../styles/whatsHot.css";

const WhatsHot = ({ id }) => {
  const pinterestLinks = [
    'https://assets.pinterest.com/ext/embed.html?id=422423640059791203',
    'https://assets.pinterest.com/ext/embed.html?id=548102217160294721',
    'https://assets.pinterest.com/ext/embed.html?id=422423640059791200',
    'https://assets.pinterest.com/ext/embed.html?id=582794008053480737',
    'https://assets.pinterest.com/ext/embed.html?id=422423640059791203',
    'https://assets.pinterest.com/ext/embed.html?id=548102217160294721'

    // Add more Pinterest links here
  ];

  return (
    <section id={id}>
      <div className="label">
        <p className="what-s-hot-for-this"> What’s hot for this week </p>
      </div>
      <div className="pinterest-grid">
        {pinterestLinks.map((link, index) => (
          <iframe
            key={index}
            src={link}
            title={`Pinterest Outfit ${index + 1}`}
            width="340"   // Set the width
            height="560"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        ))}
      </div>
    </section>
  );
}; 

export default WhatsHot;


{/* const PinterestEmbed = () => {
  const pinterestLinks = [
    'https://www.pinterest.com/pin/123456789012345678/',
    'https://www.pinterest.com/pin/234567890123456789/',
    'https://assets.pinterest.com/ext/embed.html?id=422423640059791200',
    'https://assets.pinterest.com/ext/embed.html?id=582794008053480737',
    'https://assets.pinterest.com/ext/embed.html?id=422423640059791203',
    'https://assets.pinterest.com/ext/embed.html?id=548102217160294721'

    // Add more Pinterest links here
  ];

  return (
    <div className="pinterest-grid">
      {pinterestLinks.map((link, index) => (
        <iframe
          key={index}
          src={link}
          title={`Pinterest Outfit ${index + 1}`}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      ))}
    </div>
  );
};

export default PinterestEmbed; */}

