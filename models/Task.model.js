const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Task is required'],
    unique: true,
    trim: true,
    maxLength: [500, 'Task can not be more than 500 characters'],
  },
  status: {
    type: Number,
    required: [true],
    default: 0,
    enum: [0, 1],
  },
  priority: {
    type: Number,
    required: [true, 'Priority is required'],
    trim: true,
    enum: [1, 2, 3, 4],
  },
  deadline: {
    type: Date,
    required: [true, 'Date is required'],
  },
  tags: [
    {
      type: String,
      trim: true,
      unique: true,
      maxLength: [40, 'Tag can not be more than 40 characters'],
    },
  ],
  finishedTime: {
    type: Date,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
