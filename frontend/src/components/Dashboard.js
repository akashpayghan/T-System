import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMarketData } from '../redux/slices/marketSlice';
import Chart from './Chart';
import Watchlist from './Watchlist';
import Portfolio from './Portfolio';
import Notification from './Notification';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { marketData } = useSelector((state) => state.market);

  useEffect(() => {
    dispatch(fetchMarketData());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>Trading Dashboard</h1>
      <div className="dashboard-grid">
        <div className="widget chart-widget">
          <Chart data={marketData} />
        </div>
        <div className="widget watchlist-widget">
          <Watchlist />
        </div>
        <div className="widget portfolio-widget">
          <Portfolio />
        </div>
        <div className="widget notification-widget">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;