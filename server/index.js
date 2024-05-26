const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/career-path-navigator', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.get('/', (req, res) => {
  res.send('Career Path Navigator API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// Add this after the other middleware
const careerPathsRouter = require('./routes/careerPaths');
app.use('/careerPaths', careerPathsRouter);

const quizzesRouter = require('./routes/quizzes');
const mentorsRouter = require('./routes/mentors');
const resourcesRouter = require('./routes/resources');

app.use('/quizzes', quizzesRouter);
app.use('/mentors', mentorsRouter);
app.use('/resources', resourcesRouter);
