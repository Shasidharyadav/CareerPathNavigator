import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/quizzes')
      .then(response => {
        setQuizzes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Career Assessment Quizzes</h2>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz._id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;
