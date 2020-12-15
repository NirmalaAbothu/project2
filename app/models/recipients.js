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
            foreignKey: "id_user" 
        })
    }
    return Recipients
};