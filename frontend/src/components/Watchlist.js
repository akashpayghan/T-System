import React from 'react';
import './Watchlist.css';

const Watchlist = () => {
  const watchlist = [
    { name: 'RELIANCE', price: 2950.25, change: '+2.5%' },
    { name: 'TCS', price: 4200.50, change: '-1.2%' },
  ];

  return (
    <div className="watchlist">
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map((stock, index) => (
          <li key={index}>
            {stock.name} - ₹{stock.price} <span className={stock.change.startsWith('+') ? 'positive' : 'negative'}>{stock.change}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;