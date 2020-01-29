const User = require('../models').User;

exports.createUsers = async users => {
  return await User.bulkCreate(users, {
    updateOnDuplicate: [
      'email',
      'company',
      'firstName',
      'lastName',
      'whenChanged',
      'whenCreated',
      'department',
      'title',
      'initials'
    ]
  });
};
