const bcrypt = require('bcryptjs');
const config = require('../../config/config.development');
const adminService = require('../../services/admin.service');
const ResponseHandler = require('../responseHandler/response.handler');
const { SUCCESS, ERROR } = require('../responseHandler/response.messages');
const jwt = require('jsonwebtoken');

class Auth {
  static checkToken(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, config.get('securityKey'), (err, decoded) => {
        if (err) {
          return ResponseHandler.unAuthorize(res, ERROR.TOKEN_INVALID);
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return ResponseHandler.internalServerError(res, ERROR.NO_TOKEN);
    }
  }

  static login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
      const admin = await adminService.getAdmin(email);
      if (!admin) {
        return ResponseHandler.inCorrectCredential(
          res,
          ERROR.INCORRECT_CREDENTIALS
        );
      }
      const isLogin = bcrypt.compare(password, admin.dataValues.password);

      if (isLogin) {
        const token = jwt.sign(
          { email: email, id: admin.dataValues.id },
          config.get('securityKey'),
          {
            expiresIn: '24h' // expires in 24 hours
          }
        );

        return ResponseHandler.success(res, {
          message: SUCCESS.AUTH_SUCCESS,
          token: token
        });
      } else {
        return ResponseHandler.inCorrectCredential(
          res,
          ERROR.INCORRECT_CREDENTIALS
        );
      }
    } else {
      return ResponseHandler.authenticationFailed(res, ERROR.AUTH_FAILED);
    }
  };

  static logout = async (req, res) => {
    return ResponseHandler.success(res, { message: SUCCESS.LOGOUT });
  };
}

module.exports = Auth;
