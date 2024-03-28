// @desc    Get all todos
// @route   GET /api/v1/todos
exports.getTodos = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all todos' });
};

// @desc    Get single todo
// @route   GET /api/v1/todos/:id
exports.getTodo = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show todo ${req.params.id}` });
};

// @desc    Create new todo
// @route   POST /api/v1/todos
exports.createTodo = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new todo' });
};

// @desc    Update todo
// @route   PUT /api/v1/todos/:id
exports.updateTodo = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update todo ${req.params.id}` });
};

// @desc    Delete todo
// @route   DELETE /api/v1/todos/:id
exports.deleteTodo = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete todo ${req.params.id}` });
};
