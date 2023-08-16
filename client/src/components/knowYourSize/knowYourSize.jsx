import React, { useState, useEffect} from "react";
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

  const resetValues = () => {
    setBust(0);
    setWaist(0);
    setChest(0);
    setGender(0);
    setHip(0);
    setNeck(0);
    setSleeve(0);
    setErrorMessage("");
    setPredictedSize("");
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      resetValues();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  const handleInputChange = (fieldName, value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      switch (fieldName) {
        case "bust":
          setBust(numericValue);
          break;
        case "waist":
          setWaist(numericValue);
          break;
        case "hip":
          setHip(numericValue);
          break;
        case "neck":
          setNeck(numericValue);
          break;
        case "chest":
          setChest(numericValue);
          break;
        case "sleeve":
          setSleeve(numericValue);
        default:
          break;
      }
    }
  };

  const isInputComplete = () => {
    if (gender === "female") {
      return bust !== 0 && waist !== 0 && hip !== 0;
    } else if (gender === "male") {
      return chest !== 0 && waist !== 0 && neck !== 0 && sleeve !== 0;
    }
    return false;
  };
  const handleSubmit = async () => {
    try {
      if (!gender) {
        setErrorMessage("Please select gender");
        return;
      }
      if (isInputComplete()) {
        setPredictedSize("");
        setErrorMessage("Please enter all measurement values.");
        return;
      }

      setErrorMessage(""); // Clear error message
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
              onChange={(e) => handleInputChange("bust", e.target.value)}
              placeholder="Enter measurements in inches.."
            />
            <label>Waist:</label>
            <input
              type="text"
              value={waist}
              onChange={(e) => handleInputChange("waist", e.target.value)}
              placeholder="Enter measurements in inches.."
            />
            <label>Hip:</label>
            <input
              type="text"
              value={hip}
              onChange={(e) => handleInputChange("hip", e.target.value)}
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
              onChange={(e) => handleInputChange("chest", e.target.value)}
              placeholder="Enter measurements in inches.."
            />
            <label>Waist:</label>
            <input
              type="text"
              value={waist}
              onChange={(e) => handleInputChange("waist", e.target.value)}
              placeholder="Enter measurements in inches.."
            />
            <label>Neck:</label>
            <input
              type="text"
              value={neck}
              onChange={(e) => handleInputChange("neck", e.target.value)}
              placeholder="Enter measurements in inches.."
            />
            <label>Sleeve:</label>
            <input
              type="text"
              value={sleeve}
              onChange={(e) => handleInputChange("sleeve", e.target.value)}
              placeholder="Enter measurements in inches.."
            />
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
      {errorMessage && <p>{errorMessage}</p>}
      {predictedSize && <p>Predicted Size: {predictedSize}</p>}
    </section>
  );
};

export default KnowYourSize;
