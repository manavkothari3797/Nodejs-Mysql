'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Admin.associate = function() {
    // associations can be defined here
  };
  return Admin;
};
