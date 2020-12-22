module.exports = (sequelize, DataTypes) => {
    const Recipients = sequelize.define("Recipients", {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Recipients.associate = (models) => {
        Recipients.belongsTo(models.User, {
            onDelete: "cascade",
            foreignKey: "id_user" 
        })
    };

    Recipients.associate = (models) => {
        Recipients.hasMany(models.Gifts, {
          foreignKey: "id_recipient"
        });
      };

    return Recipients;
};