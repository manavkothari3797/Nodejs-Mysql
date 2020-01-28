const bcrypt = require('bcryptjs');
const config = require('../../config/config.development');
const adminService = require('../../services/admin.service');
const ResponseHandler = require('../responseHandler/response.handler');
const { ERROR } = require('../responseHandler/response.messages');

class Admin {
  static createAdmin = async (res, admin) => {
    bcrypt.hash(admin.password, config.get('saltRound'), async (err, hash) => {
      if (err) {
        return ResponseHandler.internalServerError(
          res,
          ERROR.INTERNAL_SERVER_ERROR
        );
      } else {
        try {
          await adminService.createAdmin({
            email: admin.email,
            password: hash
          });
        } catch (error) {
          return ResponseHandler.internalServerError(
            res,
            ERROR.INTERNAL_SERVER_ERROR
          );
        }
      }
    });
  };
}

module.exports = Admin;
