import React, { useEffect, useState } from "react";

const LinkComponent = ({ pinterestLink }) => {
  const [extractedId, setExtractedId] = useState(null);

  useEffect(() => {
    const idMatch = pinterestLink.match(/\/(\d+)\//);
    const newExtractedId = idMatch ? idMatch[1] : null;
    setExtractedId(newExtractedId);
  }, [pinterestLink]);

  if (extractedId === null) {
    return <></>; // Return nothing if no valid ID is found
  }

  return (
    <div style={{ padding: "5px" }}>
      <iframe
        src={`https://assets.pinterest.com/ext/embed.html?id=${extractedId}`}
        height="454"
        width="236"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default LinkComponent;




















