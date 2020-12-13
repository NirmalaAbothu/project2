module.exports = (sequelize, DataTypes) => {
    const Gifts = sequelize.define("Gifts", {
        
        gift: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        }
    });
    return Gifts;
};