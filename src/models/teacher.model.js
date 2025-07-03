export default (sequelize, DataTypes) =>
    sequelize.define('Teacher', {
        name: DataTypes.STRING,
        department: DataTypes.STRING
    }, {
        timestamps: true // enable createdAt/updatedAt
    });
