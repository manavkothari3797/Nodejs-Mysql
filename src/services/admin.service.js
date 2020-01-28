const Admin = require('../models').Admin;

exports.createAdmin = async admin => {
  return await Admin.create(admin);
};

exports.getAdmin = async email => {
  return await Admin.findOne({ where: { email } });
};
