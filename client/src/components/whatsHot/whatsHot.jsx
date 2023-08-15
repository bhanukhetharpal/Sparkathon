import React from "react";
import "../../styles/whatsHot.css";

const WhatsHot = ({ id }) => {
  return (
    <section id={id}>
      <div className="label">
        <p className="what-s-hot-for-this"> What’s hot for this week </p>
      </div>
    </section>
  );
};

export default WhatsHot;
