module.exports = (sequelize, DataTypes) => {
    const Recipients = sequelize.define("Recipients", {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
    });

    Recipients.associate = (models) => {
        Recipients.belongsTo(models.User, {
            foreignKey: "id_user" 
        })
    }
    return Recipients
};