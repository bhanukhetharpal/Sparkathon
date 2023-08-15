import React from "react";
import Heading from "./heading";
import Body from "./body";
import Footer from "./footer";
import TitleImage from "../../assets/title_image.png";
import "../../styles/titlePage/titlePage.css"
const TitlePage = ({ id }) => {
  return (
    <section id={id}>
      <div className="title-page-container">
        <div className="title-content">
          <Heading />
          <Body />
          <Footer />
        </div>
        <div className="title-image">
          <img src={TitleImage} alt="Title Image" />
        </div>
      </div>
    </section>
  );
};

export default TitlePage;
