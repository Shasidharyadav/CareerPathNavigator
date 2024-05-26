const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerPathSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requiredSkills: { type: [String], required: true },
  jobRoles: { type: [String], required: true },
  averageSalary: { type: Number, required: true },
  steps: { type: [String], required: true },
}, {
  timestamps: true,
});

const CareerPath = mongoose.model('CareerPath', careerPathSchema);

module.exports = CareerPath;
