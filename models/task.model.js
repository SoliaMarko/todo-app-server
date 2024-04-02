const mongoose = require('mongoose');
const {
  TASK_REQUIRED_ERROR,
  TASK_MAX_LENGTH_ERROR,
  PRIORITY_REQUIRED_ERROR,
  DATE_REQUIRED_ERROR,
  TAG_MAX_LENGHT_ERROR,
} = require('../constants/taskErrors.constant');
const {
  MAX_TASK_LENGTH,
  MAX_TAG_LENGTH,
} = require('../constants/constraints.constant');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, TASK_REQUIRED_ERROR],
    unique: true,
    trim: true,
    maxLength: [MAX_TASK_LENGTH, TASK_MAX_LENGTH_ERROR],
  },
  status: {
    type: Number,
    required: [true],
    default: 0,
    enum: [0, 1],
  },
  priority: {
    type: Number,
    required: [true, PRIORITY_REQUIRED_ERROR],
    trim: true,
    enum: [1, 2, 3, 4],
  },
  deadline: {
    type: Date,
    required: [true, DATE_REQUIRED_ERROR],
  },
  tags: [
    {
      type: String,
      trim: true,
      maxLength: [MAX_TAG_LENGTH, TAG_MAX_LENGHT_ERROR],
    },
  ],
  finishedTime: {
    type: Date,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
