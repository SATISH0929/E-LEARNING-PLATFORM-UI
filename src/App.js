import React, { useEffect, useState } from 'react';
import './App.css';

const LearningApp = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data.slice(0, 20)))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="container">
      <h1>Learning Application</h1>
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LearningApp;
