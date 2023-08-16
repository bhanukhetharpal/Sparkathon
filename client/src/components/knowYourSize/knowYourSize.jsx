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
  const [errorMessage, setErrorMessage] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      let apiname = "";
      let data = null;
      if (gender === "female") {
        apiname = "women-size-chart";
        data = { bust, waist, hip };
      } else {
        apiname = "men-size-chart";
        data = { chest, waist, neck, sleeve };
      }

      // Make an API request to the backend
      const response = await fetch(
        `http://localhost:5000/api/${apiname}/predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      // Set the predicted size in state
      setPredictedSize(responseData.size);
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
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setBust(value);
                } else {
                  setBust(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
            <label>Waist:</label>
            <input
              type="text"
              value={waist}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setWaist(value);
                } else {
                  setWaist(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
            <label>Hip:</label>
            <input
              type="text"
              value={hip}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setHip(value);
                } else {
                  setHip(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
          </div>
        )}

        {gender === "male" && (
          <div>
            <label>Chest:</label>
            <input
              type="text"
              value={chest}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setChest(value);
                } else {
                  setChest(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
            <label>Waist:</label>
            <input
              type="text"
              value={waist}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setWaist(value);
                } else {
                  setWaist(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
            <label>Neck:</label>
            <input
              type="text"
              value={neck}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setNeck(value);
                } else {
                  setNeck(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
            <label>Sleeve:</label>
            <input
              type="text"
              value={sleeve}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setSleeve(value);
                } else {
                  setSleeve(""); // Clear the value
                }
              }}
              placeholder="Enter measurements in inches.."
            />
          </div>
        )}
      </div>
      <button onClick={handleSubmit} disabled={!gender}>
        Submit
      </button>
      {errorMessage && <p>{errorMessage}</p>}
      {predictedSize && <p>Predicted Size: {predictedSize}</p>}
    </section>
  );
};

export default KnowYourSize;
