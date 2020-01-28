const ResponseHandler = require('../util/responseHandler/response.handler');
const { SUCCESS, ERROR } = require('../util/responseHandler/response.messages');
const STATUS = require('../util/responseHandler/status.code');
const Admin = require('../util/util/Admin');
const AdminService = require('../services/admin.service');

exports.signUp = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return ResponseHandler.notFound(res, ERROR.ALL_FIELD_REQUIRED);
  }

  const admin = {
    email: req.body.email,
    password: req.body.password
  };

  try {
    const isExist = await AdminService.getAdmin(admin.email);

    if (isExist) {
      return ResponseHandler.conflict(res, ERROR.EMIL_ALREADY_REG);
    }

    await Admin.createAdmin(res, admin);
  } catch (error) {
    return ResponseHandler.internalServerError(
      res,
      ERROR.INTERNAL_SERVER_ERROR
    );
  }

  return ResponseHandler.send(res, STATUS.SUCCESS, SUCCESS.ADMIN_CREATED);
};
