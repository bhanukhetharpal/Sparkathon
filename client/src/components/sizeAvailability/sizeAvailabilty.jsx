import React, { useState } from 'react';

const SizeAvailabilty = ({id}) => {

    //setting up variables
  const [productID, setProductID] = useState('');
  const [availability, setAvailability] = useState('');
  const [showTrialRoomInput, setShowTrialRoomInput] = useState(false);
  const [trialRoomNumber, setTrialRoomNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleProductIDChange = (event) => {
    const id = event.target.value;
    setProductID(id);

    // Assuming you have an API call to get availability based on product ID
    // You can modify this part to make the actual API call
    const fakeApiCallResult = {
      availability: id % 2 === 0 ? 'yes' : 'no', // Simulating availability based on product ID
    };

    setAvailability(fakeApiCallResult.availability);

    if (fakeApiCallResult.availability === 'no') {
      setShowTrialRoomInput(true);
    } else {
      setShowTrialRoomInput(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (availability === 'no') {
      // Handle submission for 'no' availability
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
    } else {
      // Handle submission for 'yes' availability
      alert('Enter your trial room no.');
    }
  };

  return (
    <section id = {id}>    
    <div>
      <h1>Check the Product's Size Availability</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input type="text" value={productID} onChange={handleProductIDChange} />
        </label>
        <br />
        {showTrialRoomInput ? (
          <>
            <p>The product isn't currently available, but we'll get right back to you whenever it is! Enter your e-mail and mobile number for the same.</p>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Phone Number:
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <br />
          </>
        ) : (
          <p>Enter your trial room number.</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
    </section>
  );
};

export default SizeAvailabilty;
