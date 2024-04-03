const taskErrors = {
  REQUIRED_ERROR: field => `${field} is required`,
  MAX_LENGTH_ERROR: (field, max_length) =>
    `${field} can not be more than ${max_length} characters`,
};

module.exports = taskErrors;
