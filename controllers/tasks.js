const Tasks = require('../models/Task.model');

// @desc    Get all tasks
// @route   GET /api/v1/tasks
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single task
// @route   GET /api/v1/tasks/:id
exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new task
// @route   POST /api/v1/tasks
exports.createTask = async (req, res, next) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

// @desc    Update task
// @route   PUT /api/v1/tasks/:id
exports.updateTask = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update task ${req.params.id}` });
};

// @desc    Delete task
// @route   DELETE /api/v1/tasks/:id
exports.deleteTask = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete task ${req.params.id}` });
};
