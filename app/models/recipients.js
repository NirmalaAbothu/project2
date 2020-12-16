module.exports = (sequelize, DataTypes) => {
    const Recipient = sequelize.define("Recipient", 
    {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
    });

    Recipient.associate = (models) => {
        Recipient.belongsTo(models.User, {
            foreignKey: "id_user" 
        })
    }

};