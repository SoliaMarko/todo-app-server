const mongoose = require('mongoose');
const {
  REQUIRED_ERROR,
  MAX_LENGTH_ERROR,
} = require('../constants/taskErrors.constant');
const { MAX_TASK_LENGTH } = require('../constants/constraints.constant');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, REQUIRED_ERROR('task')],
    unique: true,
    trim: true,
    maxLength: [MAX_TASK_LENGTH, MAX_LENGTH_ERROR('task', MAX_TASK_LENGTH)],
  },
  status: {
    type: Number,
    required: [true],
    default: 0,
    enum: [1, 2, 3],
  },
  priority: {
    type: Number,
    required: [true, REQUIRED_ERROR('priority')],
    trim: true,
    enum: [1, 2, 3, 4],
  },
  deadline: {
    type: Date,
    required: [true, REQUIRED_ERROR('date')],
  },
  tags: [
    {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
  ],
  finishedTime: {
    type: Date,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
