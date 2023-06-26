import React, { useState } from 'react';

const TravelApp = () => {
  const [destination, setDestination] = useState('');

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  return (
    <div>
      <h1>Travel and Direction App</h1>
      <div>
        <h2>Choose your destination:</h2>
        <button onClick={() => handleDestinationSelect('Tikkurila')}>Tikkurila</button>
        <button onClick={() => handleDestinationSelect('Kamppi')}>Kamppi</button>
      </div>
      {destination === 'Tikkurila' && (
        <div>
          <h2>Welcome to Tikkurila!</h2>
          <p>If you are coming via Tikkurila, follow these steps:</p>
          <ol>
            <li>Take Bus 570 from Tikkurila. Buses arrive approximately every 10 minutes.</li>
            <li>Get off at Silvastintie Bus stop.</li>
            <li>Follow the directions provided in this video to reach Skyline Airport Hotel.</li>
          </ol>
        </div>
      )}
      {destination === 'Kamppi' && (
        <div>
          <h2>Welcome to Kamppi!</h2>
          {/* Add content specific to Kamppi */}
        </div>
      )}
    </div>
  );
};

export default TravelApp;
