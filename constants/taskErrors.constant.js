const { MAX_TASK_LENGTH, MAX_TAG_LENGTH } = require('./constraints.constant');

const taskErrors = {
  TASK_REQUIRED_ERROR: 'Task is required',
  TASK_MAX_LENGTH_ERROR: `Task can not be more than ${MAX_TASK_LENGTH} characters`,
  PRIORITY_REQUIRED_ERROR: 'Priority is required',
  DATE_REQUIRED_ERROR: 'Date is required',
  TAG_MAX_LENGHT_ERROR: `Tag can not be more than ${MAX_TAG_LENGTH} characters`,
};

module.exports = taskErrors;
