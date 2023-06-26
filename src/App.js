import React, { useState } from 'react';
import './App.css';

const TravelApp = () => {
  const [destination, setDestination] = useState('');

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  return (
    <div className="container">
      <h1 className="title">Travel Direction to the Women Conference</h1>
      <div className="destination-section">
        <h2 className="subtitle">Choose your arrival port:</h2>
        <div className="buttons">
          <button
            className={`destination-button ${destination === 'Tikkurila' ? 'active' : ''}`}
            onClick={() => handleDestinationSelect('Tikkurila')}
          >
            Tikkurila
          </button>
          <button
            className={`destination-button ${destination === 'Kamppi' ? 'active' : ''}`}
            onClick={() => handleDestinationSelect('Kamppi')}
          >
            Kamppi
          </button>
        </div>
      </div>
      {destination === 'Tikkurila' && (
        <div className="destination-content">
          <h2 className="subtitle">Welcome to Tikkurila!</h2>
          <p>follow these steps:</p>
          <div className="destination-content1">
            <ol>
              <li>Take Bus 570 from Tikkurila. Buses arrive approximately every 10 minutes.</li>
              <li>Get off at Silvastintie Bus stop.</li>
              <li>
                Follow the directions provided in the video below to reach Skyline Airport Hotel:
              </li>
            </ol>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rAz-fy5fs6E"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {destination === 'Kamppi' && (
        <div className="destination-content">
          <h2 className="subtitle">Welcome to Kamppi!</h2>
          <p>follow these steps:</p>
          <div className="destination-content1">
            <ol>
              <li>Walk to Rautatietori</li>
              <li>Take Bus 600 at stand 7</li>
              <li>Get off at Silvastintie Bus stop.</li>
              <li>
                Follow the directions provided in the video below to reach Skyline Airport Hotel:
              </li>
            </ol>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rAz-fy5fs6E"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <TravelApp />
    </div>
  );
};

export default App;
