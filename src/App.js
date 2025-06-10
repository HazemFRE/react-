import React, { useState, useEffect } from 'react';
import './App.css';

const SkipCard = ({ size, price, period, selected, onSelect, image }) => (
  <div className={`skip-card ${selected ? 'selected' : ''}`}>
    <img src={image} alt={`${size} Skip`} className="skip-image" />
    <div className="card-content">
      <h3>{size}</h3>
      <p>£{price}</p>
      <p>{period}</p>
      <button className={selected ? 'selected-btn' : 'choose-btn'} onClick={onSelect}>
        {selected ? 'Selected' : 'Choose'}
      </button>
    </div>
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
  }, []); // ينفذ مرة واحدة فقط عند التحميل

  return (
    <div className="app-container">
      <h1 className="app-title">Pick the Perfect Skip Size</h1>
      <p className="app-subtitle">Choose the skip size that best suits your needs</p>
      <div className="skip-list">
        {skipData.map((skip) => (
          <SkipCard
            key={skip.size}
            size={skip.size}
            price={skip.price}
            period={skip.period}
            selected={selectedSkip === skip.size}
            onSelect={() => setSelectedSkip(skip.size)}
            image={skip.image}
          />
        ))}
      </div>
      <div className="button-group">
        <button className="back-btn" onClick={() => setSelectedSkip(null)}>Back</button>
        <button className="continue-btn" disabled={!selectedSkip}>Continue</button>
      </div>
    </div>
  );
}

export default App;