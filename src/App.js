import React, { useState, useEffect } from 'react';
import './App.css';

const SkipCard = ({ size, price, period, selected, onSelect, image }) => (
  <div 
    className={`skip-card ${selected ? 'selected' : ''}`}
    onClick={onSelect}
  >
    <div className="image-container">
      <img src={image} alt={`${size} Skip`} className="skip-image" />
      <div className="size-badge">{size.split(' ')[0]}</div>
    </div>
    <div className="card-content">
      <h3>{size}</h3>
      <div className="price-tag">£{price}</div>
      <p className="period">{period}</p>
      <div className="select-indicator">
        {selected ? (
          <div className="selected-icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            Selected
          </div>
        ) : (
          <button className="choose-btn">
            Choose
          </button>
        )}
      </div>
    </div>
    {selected && <div className="selection-pulse"></div>}
  </div>
);

function App() {
  const [skipData, setSkipData] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const dummyData = [
      { size: '4 Yards', price: 227, period: '7 day hire', image: 'https://bakersenvironmental.co.uk/wp-content/uploads/2012/06/SKIP-SIZE-4-YARD.jpg' },
      { size: '6 Yards', price: 300, period: '14 day hire', image: 'https://www.gleeksskiphire.co.uk/wp-content/uploads/2017/08/skio.png' },
      { size: '8 Yards', price: 325, period: '7 day hire', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSpmUUeqnDh75bWYUnH9fgrNV8s8Jb8GZlQ&s' },
      { size: '10 Yards', price: 350, period: '7 day hire', image: 'https://www.skiphire.services/wp-content/uploads/2016/02/Skip-Hire-Sizes-10-Yards.jpg' },
      { size: '12 Yards', price: 375, period: '14 day hire', image: 'https://www.leighskiphire.co.uk/wp-content/uploads/2023/07/skip_12-yard.png' },
      { size: '14 Yards', price: 400, period: '7 day hire', image: 'https://www.skiphire.services/wp-content/uploads/2016/02/Skip-Hire-Sizes-14-Yards.jpg' },
      { size: '16 Yards', price: 425, period: '7 day hire', image: 'https://www.elyskiphire.co.uk/wp-content/uploads/2022/03/16-Yard.png' },
      { size: '20 Yards', price: 450, period: '14 day hire', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSt_srlTWW-hyHsAGTbpxAyNBb1u_4OfhlgQ&s' },
      { size: '40 Yards', price: 500, period: '14 day hire', image: 'https://enviroskiphire.co.uk/wp-content/uploads/2021/03/skip-rollon.jpg' },
    ];
    setSkipData(dummyData);
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="app-title">Find Your Perfect Skip</h1>
        <p className="app-subtitle">Select the right size for your project needs</p>
      </div>
      
      <div className="skip-list">
        {skipData.map((skip, index) => (
          <SkipCard
            key={skip.size}
            size={skip.size}
            price={skip.price}
            period={skip.period}
            selected={selectedSkip === skip.size}
            onSelect={() => setSelectedSkip(skip.size)}
            image={skip.image}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
      
      <div className="button-group">
        <button 
          className="back-btn"
          onClick={() => setSelectedSkip(null)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back
        </button>
        <button 
          className="continue-btn" 
          disabled={!selectedSkip}
        >
          Continue
          <svg viewBox="0 0 24 24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;