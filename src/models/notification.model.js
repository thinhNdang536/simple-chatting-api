const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const Notification = sequelize.define('Notification', {
    notificationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    content: {
        type: DataTypes.STRING(255),
        allowNull: false,
        required: true
    },
    isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        required: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        required: true
    }
}, {
    tableName: 'Notification',
    timestamps: false
});

module.exports = Notification;
