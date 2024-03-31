const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Task is required'],
    unique: true,
    trim: true,
    maxLength: [500, 'Task can not be more than 500 characters'],
  },
  priority: {
    type: String,
    required: [true, 'Priority is required'],
    trim: true,
    enum: ['low', 'medium', 'high', 'critical'],
  },
  deadlines: {
    type: Date,
    required: [true, 'Date is required'],
  },
  tags: [
    {
      type: String,
      trim: true,
      enum: ['study', 'work', 'family', 'fun', 'health'],
    },
  ],
  finishedTime: {
    type: date,
  },
});

export default TaskSchema;
