import React from 'react';
import './Education.css';

const Education = () => {
  const resources = [
    { title: 'Trading Basics', type: 'Article' },
    { title: 'Advanced Strategies', type: 'Webinar' },
  ];

  return (
    <div className="education">
      <h1>Educational Resources</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            {resource.title} - {resource.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;