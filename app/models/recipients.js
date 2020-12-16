module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
    const Recipient = sequelize.define("Recipient", 
    {
=======
    const Recipients = sequelize.define("Recipients", {
>>>>>>> develop
        
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

<<<<<<< HEAD
    Recipient.associate = (models) => {
        Recipient.belongsTo(models.User, {
=======
    Recipients.associate = (models) => {
        Recipients.belongsTo(models.User, {
>>>>>>> develop
            foreignKey: "id_user" 
        })
    }
    return Recipients
};