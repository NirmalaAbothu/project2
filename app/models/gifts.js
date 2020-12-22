module.exports = (sequelize, DataTypes) => {
    const Gifts = sequelize.define("Gifts", {
        
        gift: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        id_recipient: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            validate: {
                len: [1]
            }

        }
    });

    Gifts.associate = (models) => {
        Gifts.belongsTo(models.Recipients, {
            onDelete: "cascade",
            foreignKey: "id_recipient"
        })
    };

    return Gifts;
};