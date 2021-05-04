const express = require('express');
const { getStudents, getStudent, createStudent } = require('../controllers/students');

const router = express.Router();

router.route('/').get(getStudents).post(createStudent);

router.route('/:id').get(getStudent);

module.exports = router;
