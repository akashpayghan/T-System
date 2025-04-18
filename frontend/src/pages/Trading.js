import React from 'react';
import Chart from '../components/Chart';
import SocialTrading from '../components/SocialTrading';
import './Trading.css';

const Trading = () => {
  return (
    <div className="trading">
      <h1>Trading</h1>
      <div className="trading-content">
        <Chart />
        <SocialTrading />
      </div>
    </div>
  );
};

export default Trading;