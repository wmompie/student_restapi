const mongoose = require('mongoose');
const slugify = require('slugify');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add first name'],
    unique: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please add last name'],
    unique: true,
    trim: true,
  },
  slug: String,
});

// Create student slug from the name
StudentSchema.pre('save', function (next) {
  this.slug = slugify(`${this.firstName} ${this.lastName}`, { lower: true });
  next();
});

module.exports = mongoose.model('Student', StudentSchema);
