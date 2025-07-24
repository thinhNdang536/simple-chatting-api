const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const Poll = sequelize.define('Poll', {
    pollId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    title: {
        type: DataTypes.STRING(100),
        required: true,
    },
    options: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 24
    }
}, {
    tableName: 'Poll',
    timestamps: false
});

module.exports = Poll;
