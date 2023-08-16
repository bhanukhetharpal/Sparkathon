import React from "react";
import "../../styles/titlePage/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">    
    <div className="frame">
      <p className="div" style={{ marginLeft: '20px' }}>
        <span className="text-wrapper">
          25+
          <br />
        </span>
        <span className="span">Year of exprience</span>
      </p>
      <p className="div" style={{ marginLeft: '20px' }}>
        <span className="text-wrapper" >
          98+
          <br />
        </span>
        <span className="span">Countries</span>
      </p>
      <p className="div" style={{ marginLeft: '20px' }}>
        <span className="text-wrapper">
          1100+
          <br />
        </span>
        <span className="span">Stores</span>
      </p>
    </div>
    </div>
  );
};

export default Footer;
