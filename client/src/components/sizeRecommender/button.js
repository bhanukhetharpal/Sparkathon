import React, { useState } from 'react';

const Button = () => {
    const [measurements, setMeasurements] = useState({
        gender: 'female',
        bust: 0,
        waist: 0,
        hips: 0,
        chest: 0,
        neck: 0,
        sleeve: 0
    });
    const [size, setSize] = useState('');

    const predictSize = (gender, measurements) => {
        if (gender === 'female') {
            // Women's size chart prediction
            if (measurements.bust <= 42.5) return '1X';
            if (measurements.bust <= 44.5) return '2X';
            if (measurements.bust <= 46.5) return '2X';
            if (measurements.bust <= 48.5) return '3X';
            if (measurements.bust <= 50.5) return '3X';
            if (measurements.bust <= 52.5) return '4X';
            if (measurements.bust <= 54.5) return '4X';
            if (measurements.bust <= 56.5) return '5X';
            if (measurements.bust <= 58.5) return '5X';
        } else {
            // Men's size chart prediction
            if (measurements.chest <= 36) return 'S';
            if (measurements.chest <= 40) return 'M';
            if (measurements.chest <= 44) return 'L';
            if (measurements.chest <= 48) return 'XL';
            if (measurements.chest <= 52) return '2XL';
            if (measurements.chest <= 56) return '3XL';
            if (measurements.chest <= 60) return '4XL';
            if (measurements.chest <= 64) return '5XL';
        }
    };

    const handleSubmit = () => {
        const predictedSize = predictSize(measurements.gender, measurements);
        setSize(predictedSize);
    };

    return (
        <div>
            <h2>Size Predictor</h2>
            <select onChange={e => setMeasurements({ ...measurements, gender: e.target.value })}>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
            <br />
            <label>
                {measurements.gender === 'female' ? 'Bust' : 'Chest'}: 
                <input type="number" value={measurements.bust} onChange={(e) => setMeasurements({ ...measurements, bust: parseFloat(e.target.value) })} />
            </label>
            <br />
            <label>
                Waist: 
                <input type="number" value={measurements.waist} onChange={(e) => setMeasurements({ ...measurements, waist: parseFloat(e.target.value) })} />
            </label>
            <br />
            {/* Display neck and sleeve inputs for men */}
            {measurements.gender === 'male' && (
                <>
                    <label>
                        Neck: 
                        <input type="number" value={measurements.neck} onChange={(e) => setMeasurements({ ...measurements, neck: parseFloat(e.target.value) })} />
                    </label>
                    <br />
                    <label>
                        Sleeve: 
                        <input type="number" value={measurements.sleeve} onChange={(e) => setMeasurements({ ...measurements, sleeve: parseFloat(e.target.value) })} />
                    </label>
                    <br />
                </>
            )}
            <button onClick={handleSubmit}>Predict Size</button>
            <br />
            {size && <p>Predicted Size: {size}</p>}
        </div>
    );
};

export default Button;
