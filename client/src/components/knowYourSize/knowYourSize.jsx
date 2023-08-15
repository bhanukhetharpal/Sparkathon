import React, { useState } from "react";
import "../../styles/knowYourSize.css";

const KnowYourSize = ({ id }) => {
  const [gender, setGender] = useState(""); // State to store selected gender
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [chest, setChest] = useState("");
  const [neck, setNeck] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [predictedSize, setPredictedSize] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      let apiname = "";
      let data = "";
      if (gender == female) {
        apiname = "women-size-chart";
        data = { bust, waist, hip };
      } else {
        apiname = "men-size-chart";
        data = { chest, waist, neck, sleeve };
      }

      // Make an API request to the backend
      const response = await fetch("/api/" + apiname + "/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      // Set the predicted size in state
      setPredictedSize(responseData.predictedSize);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id={id}>
      <div className="label">
        <div className="know-your-size"> Know Your Size </div>
      </div>
      <div className="input-container">
        <label>Gender:</label>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        {gender === "female" && (
          <div>
            <label>Bust:</label>
            <input
              type="text"
              value={bust}
              onChange={(e) => setBust(e.target.value)}
            />
            <label>Waist:</label>
            <input
              type="text"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
            <label>Hip:</label>
            <input
              type="text"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
            />
          </div>
        )}

        {gender === "male" && (
          <div>
            <label>Chest:</label>
            <input
              type="text"
              value={chest}
              onChange={(e) => setChest(e.target.value)}
            />
            <label>Waist:</label>
            <input
              type="text"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
            <label>Neck:</label>
            <input
              type="text"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
            />
            <label>Sleeve:</label>
            <input
              type="text"
              value={sleeve}
              onChange={(e) => setSleeve(e.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {predictedSize && <p>Predicted Size: {predictedSize}</p>}
    </section>
  );
};

export default KnowYourSize;
