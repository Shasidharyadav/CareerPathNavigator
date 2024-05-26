import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1 className="my-4">Welcome to Career Path Navigator</h1>
      <p className="lead">Discover potential career paths based on your interests, skills, and academic background.</p>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Career Assessment Quizzes</Card.Title>
              <Card.Text>
                Take quizzes to discover career paths that align with your interests and skills.
              </Card.Text>
              <Button as={Link} to="/quizzes" variant="primary">Take a Quiz</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Personalized Career Recommendations</Card.Title>
              <Card.Text>
                Get personalized career recommendations based on your profile.
              </Card.Text>
              <Button as={Link} to="/recommendations" variant="primary">Get Recommendations</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Mentor Connections</Card.Title>
              <Card.Text>
                Connect with mentors and expand your professional network.
              </Card.Text>
              <Button as={Link} to="/mentors" variant="primary">Find Mentors</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Resource Library</Card.Title>
              <Card.Text>
                Access a library of resources including courses, books, and articles.
              </Card.Text>
              <Button as={Link} to="/resources" variant="primary">Explore Resources</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
