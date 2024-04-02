const { success, clientError } = require('../constants/statusCodes.constant');
const Tasks = require('../models/task.model');

// @desc    Get all tasks
// @route   GET /api/v1/tasks
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Tasks.find();
    res.status(success.OK).json({ success: true, data: tasks });
  } catch ({ message }) {
    res.status(clientError.NOT_FOUND).json({ success: false, message });
  }
};

// @desc    Get single task
// @route   GET /api/v1/tasks/:id
exports.getTask = async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) {
      return res.status(clientError.NOT_FOUND).json({ success: false });
    }
    res.status(success.OK).json({ success: true, data: task });
  } catch ({ message }) {
    res.status(clientError.NOT_FOUND).json({ success: false, message });
  }
};

// @desc    Create new task
// @route   POST /api/v1/tasks
exports.createTask = async (req, res, next) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(success.CREATED).json({ success: true, data: task });
  } catch ({ message }) {
    res.status(clientError.BAD_REQUEST).json({ success: false, message });
  }
};

// @desc    Update task
// @route   PUT /api/v1/tasks/:id
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(clientError.BAD_REQUEST).json({ success: false });
    }
    res.status(success.CREATED).json({ success: true, data: task });
  } catch ({ message }) {
    res.status(clientError.BAD_REQUEST).json({ success: false, message });
  }
};

// @desc    Delete task
// @route   DELETE /api/v1/tasks/:id
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Tasks.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(clientError.BAD_REQUEST).json({ success: false });
    }
    res.status(success.OK).json({ success: true, data: {} });
  } catch (err) {
    res.status(clientError.BAD_REQUEST).json({ success: false, message });
  }
};
