

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    employee:{
      name: DataTypes.STRING,
      required: true,  
    }, 
    country:{
        type: DataTypes.STRING,
        required: true,
    },    
    note:{
      type:  DataTypes.STRING,
      required: true,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.sync();
  return User;
};