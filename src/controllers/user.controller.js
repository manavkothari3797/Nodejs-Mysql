const ResponseHandler = require('../util/responseHandler/response.handler');
const { SUCCESS, ERROR } = require('../util/responseHandler/response.messages');
const STATUS = require('../util/responseHandler/status.code');
const excelToJson = require('convert-excel-to-json');

exports.upload = async (req, res) => {
  const fileDetails = req.file;
  const csvFilePath = fileDetails.path;

  const result = excelToJson({
      sourceFile: csvFilePath
  });

  console.log(result);
};
