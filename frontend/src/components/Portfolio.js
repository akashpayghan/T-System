import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolio = [
    { asset: 'RELIANCE', qty: 10, value: 29502.50 },
    { asset: 'TCS', qty: 5, value: 21002.50 },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Qty</th>
            <th>Value (₹)</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((item, index) => (
            <tr key={index}>
              <td>{item.asset}</td>
              <td>{item.qty}</td>
              <td>{item.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;