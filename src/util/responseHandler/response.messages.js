const ERROR = {
  ALL_FIELD_REQUIRED: 'All field required',
  VENDOR_NOT_FOUND: 'Vendor not found',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  PERMISSION_DENIED: 'Permission denied',
  TOKEN_INVALID: 'Token invalid',
  NO_TOKEN: 'Token not provided',
  AUTH_FAILED: 'Authentication failed! Please check the request',
  INCORRECT_CREDENTIALS: 'Incorrect username or password',
  EMIL_ALREADY_REG: 'Email already registered',
  ID_REQUIRED: 'Id required'
};

const SUCCESS = {
  OK: 'OK',
  AUTH_SUCCESS: 'Authentication successful!',
  LOGOUT: 'Successfully logout',
  ADMIN_CREATED: 'Admin registered successfully',
  FILE_UPLOADED: 'File uploaded successfully'
};

module.exports = { ERROR, SUCCESS };
