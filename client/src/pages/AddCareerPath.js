import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const AddCareerPath = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [jobRoles, setJobRoles] = useState('');
  const [averageSalary, setAverageSalary] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const careerPath = {
      title,
      description,
      requiredSkills: requiredSkills.split(','),
      jobRoles: jobRoles.split(','),
      averageSalary: Number(averageSalary),
      steps: steps.split(',')
    };

    axios.post('http://localhost:5000/careerPaths/add', careerPath)
      .then(res => console.log(res.data));

    setTitle('');
    setDescription('');
    setRequiredSkills('');
    setJobRoles('');
    setAverageSalary('');
    setSteps('');
  };

  return (
    <div>
      <h2>Add Career Path</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formRequiredSkills">
          <Form.Label>Required Skills (comma separated)</Form.Label>
          <Form.Control type="text" placeholder="Enter required skills" value={requiredSkills} onChange={(e) => setRequiredSkills(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formJobRoles">
          <Form.Label>Job Roles (comma separated)</Form.Label>
          <Form.Control type="text" placeholder="Enter job roles" value={jobRoles} onChange={(e) => setJobRoles(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formAverageSalary">
          <Form.Label>Average Salary</Form.Label>
          <Form.Control type="number" placeholder="Enter average salary" value={averageSalary} onChange={(e) => setAverageSalary(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formSteps">
          <Form.Label>Steps (comma separated)</Form.Label>
          <Form.Control type="text" placeholder="Enter steps" value={steps} onChange={(e) => setSteps(e.target.value)} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Career Path
        </Button>
      </Form>
    </div>
  );
};

export default AddCareerPath;
