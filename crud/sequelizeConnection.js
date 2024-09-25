const { sequelize, Datatypes } = require('sequelize');

const sequelize = new sequelize(
    'mca',
    'root',
    '', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database : ', error);
});

module.exports = { sequelize, DataTypes }