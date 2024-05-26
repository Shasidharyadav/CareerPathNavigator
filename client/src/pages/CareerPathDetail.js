import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CareerPathDetail = () => {
  const { id } = useParams();
  const [careerPath, setCareerPath] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/careerPaths/${id}`)
      .then(response => setCareerPath(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!careerPath) return <div>Loading...</div>;

  return (
    <div>
      <h2>{careerPath.title}</h2>
      <p>{careerPath.description}</p>
      <h4>Required Skills:</h4>
      <ul>
        {careerPath.requiredSkills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
      <h4>Job Roles:</h4>
      <ul>
        {careerPath.jobRoles.map(role => <li key={role}>{role}</li>)}
      </ul>
      <h4>Average Salary:</h4>
      <p>${careerPath.averageSalary}</p>
      <h4>Steps:</h4>
      <ul>
        {careerPath.steps.map(step => <li key={step}>{step}</li>)}
      </ul>
    </div>
  );
};

export default CareerPathDetail;
