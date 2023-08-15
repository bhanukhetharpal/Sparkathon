import React from "react";
import Heading from "./heading";
import Body from "./body";
import Footer from "./footer";
const TitlePage = ({ id }) => {
  return (
    <section id={id}>
      <div>
        <Heading />
        <Body />
        <Footer />
      </div>
    </section>
  );
};

export default TitlePage;
