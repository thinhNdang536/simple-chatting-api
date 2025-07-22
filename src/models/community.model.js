const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const Community = sequelize.define('Community', {
    communityId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    name: {
        type: DataTypes.STRING(20),
        required: true,
    },
    desc: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    createby: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    createAt: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    visibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
}, {
    tableName: 'Community',
    timestamps: false
});

module.exports = Community;
