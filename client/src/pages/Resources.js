import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/resources')
      .then(response => {
        setResources(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Resource Library</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource._id}>
            <h4>{resource.title}</h4>
            <p>{resource.description}</p>
            <p>Type: {resource.type}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
