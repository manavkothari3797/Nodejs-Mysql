const ResponseHandler = require('../util/responseHandler/response.handler');
const { SUCCESS, ERROR } = require('../util/responseHandler/response.messages');
const STATUS = require('../util/responseHandler/status.code');
const excelToJson = require('convert-excel-to-json');
const UserService = require('../services/user.service');

exports.upload = async (req, res) => {
  if (!req.file) {
    ResponseHandler.notFound(res, ERROR.ALL_FIELD_REQUIRED);
  }

  const fileDetails = req.file;
  const csvFilePath = fileDetails.path;

  const result = excelToJson({
    sourceFile: csvFilePath
  });

  const final = result[fileDetails.originalname.split('.')[0]];
  const fields = final[0];
  final.splice(0, 1);

  const users = final.map(user => {
    return {
      [fields.A]: user.A || null,
      [fields.B]: user.B || null,
      [fields.C]: user.C || null,
      [fields.D]: user.D || null,
      [fields.E]: user.E || null,
      [fields.F]: user.F || null,
      [fields.G]: user.G || null,
      [fields.H]: user.H || null,
      [fields.I]: user.I || null
    };
  });

  try {
    await UserService.createUsers(users);
  } catch (error) {
    return ResponseHandler.internalServerError(
      res,
      ERROR.INTERNAL_SERVER_ERROR
    );
  }

  return ResponseHandler.send(res, STATUS.SUCCESS, SUCCESS.FILE_UPLOADED);
};
