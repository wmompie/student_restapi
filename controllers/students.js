const Student = require('../models/Student');
// const { validationResult, matchedData } = require('express-validator');

// @desc    Validate input data on the form submit
// @access  Public
// module.exports = {
//   userForm: function (req, res) {
//     res.render('user-form');
//   },
//   validateForm: function (req, res) {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       var errMsg = errors.mapped();
//       var inputData = matchedData(req);
//     } else {
//       var inputData = matchedData(req);
//       // insert query will be written here
//     }
//     res.render('user-form', { errors: errMsg, inputData: inputData });
//   },
// };

// @desc      Get all students
// @route     GET /api/v1/students
// @access    Public
exports.getStudents = async (req, res, next) => {
  res.status(200).json({ data: students });
};

// @desc      Get single student
// @route     GET /api/v1/students/:id
// @access    Public
exports.getStudent = async (req, res, next) => {
  const bootcamp = await Student.findById(req.params.id);
  res.status(200).json({ success: true, data: bootcamp });
};

// @desc    Create new student
// @route   POST /api/v1/students
// @access  Public
exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(err);
  }
};
