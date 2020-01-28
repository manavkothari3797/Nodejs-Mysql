const { SUCCESS } = require('./response.messages');
const STATUS = require('./status.code');

class ResponseHandler {
  static success(res, responseObj) {
    return res
      .status(STATUS.SUCCESS)
      .json({ status: SUCCESS.OK, ...responseObj });
  }

  static internalServerError(res, message) {
    return this.send(res, STATUS.INTERNAL_SERVER_ERROR, message);
  }

  static unAuthorize(res, message) {
    return this.send(res, STATUS.UNAUTHORIZED, message);
  }

  static authenticationFailed(res, message) {
    return this.send(res, STATUS.AUTH_FAILED, message);
  }

  static inCorrectCredential(res, message) {
    return this.send(res, STATUS.INCORRECT_CREDENTIALS, message);
  }

  static conflict(res, message) {
    return this.send(res, STATUS.CONFLICT, message);
  }

  static notFound(res, message) {
    return this.send(res, STATUS.NOT_FOUND, message);
  }

  static send(res, statusCode, message) {
    return res.status(statusCode).json({ message: message });
  }
}

module.exports = ResponseHandler;
