import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mentors')
      .then(response => {
        setMentors(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Mentors</h2>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor._id}>
            <h4>{mentor.name}</h4>
            <p>{mentor.bio}</p>
            <p>Contact: {mentor.contact}</p>
            <p>Expertise: {mentor.expertise.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentors;
