import React, { useState } from "react";
import "../../styles/sizeAvailabilty.css";
import BarcodeButton from "../outfitRecommender/barcodeButton";
const SizeAvailabilty = ({ id }) => {
  //setting up variables
  const [productId, setProductID] = useState(null);
  const [size, setSize] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [showTrialRoomInput, setShowTrialRoomInput] = useState(null);
  const [trialRoomNumber, setTrialRoomNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleScan = (key) => {
    setProductID(key);
  };
  const handleSubmit = () => {
    if (trialRoomNumber) {
      alert("Alert sent to the helper!");
      return;
    }
    if (email && phoneNumber) {
      alert("Email and Phone Number submitted!");
    } else {
      alert("Please provide both Email and Phone Number.");
    }
  };
  const handleCheckAvailability = async () => {
    if (!productId) {
      alert("Please scan a product barcode before checking availability.");
      return;
    }
    if (!size) {
      alert("Please select a size before checking availability.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/product-availability/${productId}/${size}`
      );
      const responseData = await response.json();
      console.log(responseData);
      setAvailability(responseData.availability);
      setShowTrialRoomInput(!responseData.availability);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id={id} className="size-availability-section">
      <div className="size-availability-container">
        <h1 className="size-availability-title">Couldn't find your size?</h1>
        <h2 className='size-availability-content'>We are here to help! Scan your product barcode </h2>
        <BarcodeButton onScan={handleScan} />
        <div className="spacing"></div>
        <label>
          Size:
          <div className="spacing2"></div>

          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
            <option value="3XL">3XL</option>
            <option value="4XL">4XL</option>
            <option value="5XL">5XL</option>
          </select>
        </label>
        <br />
        <button onClick={handleCheckAvailability}>Check Availability</button>
        {submitted && (
          <div>
            {showTrialRoomInput ? (
              <>
                <p>
                  The product isn't currently available, but we'll get right
                  back to you whenever it is! Enter your e-mail and mobile
                  number for the same.
                </p>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </>
            ) : (
              <div>
                <p>
                  Product is available! Kindly enter your trial room number and
                  we will be happy to assist you.
                </p>
                <label>
                  Trial Room Number:
                  <input
                    type="text"
                    value={trialRoomNumber}
                    onChange={(e) => setTrialRoomNumber(e.target.value)}
                  />
                </label>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SizeAvailabilty;
