const { sequelize, DataTypes } = require('./../sequelizeConnection');

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;