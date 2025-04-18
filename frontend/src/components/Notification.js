import React from 'react';
import './Notification.css';

const Notification = () => {
  const notifications = [
    'RELIANCE hits ₹3000!',
    'Market news: RBI rate cut expected.',
  ];

  return (
    <div className="notification">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;