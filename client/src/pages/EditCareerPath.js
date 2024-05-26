import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCareerPath = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [jobRoles, setJobRoles] = useState('');
  const [averageSalary, setAverageSalary] = useState('');
  const [steps, setSteps] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/careerPaths/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setRequiredSkills(response.data.requiredSkills.join(','));
        setJobRoles(response.data.jobRoles.join(','));
        setAverageSalary(response.data.averageSalary);
        setSteps(response.data.steps.join(','));
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCareerPath = {
      title,
      description,
      requiredSkills: requiredSkills.split(','),
      jobRoles: jobRoles.split(','),
      averageSalary: Number(averageSalary),
      steps: steps.split(',')
    };

    axios.post(`http://localhost:5000/careerPaths/update/${id}`, updatedCareerPath)
      .then(res => {
        console.log(res.data);
        navigate('/');
      });
  };

  return (
    <div>
      <h2>Edit Career Path</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" required className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" required className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Required Skills (comma separated):</label>
          <input type="text" required className="form-control" value={requiredSkills} onChange={(e) => setRequiredSkills(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Job Roles (comma separated):</label>
          <input type="text" required className="form-control" value={jobRoles} onChange={(e) => setJobRoles(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Average Salary:</label>
          <input type="number" required className="form-control" value={averageSalary} onChange={(e) => setAverageSalary(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Steps (comma separated):</label>
          <input type="text" required className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Career Path" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default EditCareerPath;
