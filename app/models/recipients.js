module.exports = (sequelize, DataTypes) => {
    const Receiver = sequelize.define("Receiver", {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
    });

    Receiver.associate = (models) => {
        Receiver.belongsTo(models.User, {
            foreignKey: "id_user" 
        })
    }

};