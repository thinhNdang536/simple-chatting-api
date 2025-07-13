const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'COS20031_bitdrawnmy',
    'COS20031_bitdrawnmy',
    '52792cb0421642808ad0e63f7c81fbc7d3a737a0',
    {
        host: '7sz9y.h.filess.io',
        port: 61000,
        dialect: 'mariadb',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            connectTimeout: 10000
        }
    }
);

module.exports = sequelize;
