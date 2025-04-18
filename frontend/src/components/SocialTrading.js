import React from 'react';
import './SocialTrading.css';

const SocialTrading = () => {
  const traders = [
    { name: 'Trader1', strategy: 'Momentum', returns: '+15%' },
    { name: 'Trader2', strategy: 'Value', returns: '+10%' },
  ];

  return (
    <div className="social-trading">
      <h2>Social Trading</h2>
      <ul>
        {traders.map((trader, index) => (
          <li key={index}>
            {trader.name} - {trader.strategy} <span>{trader.returns}</span>
            <button>Copy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialTrading;