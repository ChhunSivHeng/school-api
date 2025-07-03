export default (sequelize, DataTypes) =>
    sequelize.define('Course', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        timestamps: true // enable createdAt/updatedAt
    });
