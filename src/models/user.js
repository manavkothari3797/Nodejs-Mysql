'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      company: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      whenChanged: DataTypes.DATE,
      whenCreated: DataTypes.DATE,
      department: DataTypes.STRING,
      title: DataTypes.STRING,
      initials: DataTypes.STRING
    },
    {}
  );
  User.associate = function() {
    // associations can be defined here
  };
  return User;
};
