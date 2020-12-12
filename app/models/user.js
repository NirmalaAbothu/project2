const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    firstName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {
            len: [1, 30]
        }
    },
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {
            len: [1, 30]
        }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 
  User.hasMany(models.Receiver, {
      onDelete: "cascade",
      foreignKey: "id_user"
  });

  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };
  
  // Before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
