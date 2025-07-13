const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    name: {
        type: DataTypes.STRING(20),
        required: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
        allowNull: false
    },
    avatarURL: {
        type: DataTypes.STRING(100),
        defaultValue: 'exampleURL'
    },
    createAt: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'blocked'),
        defaultValue: 'active',
        allowNull: false
    }
}, {
    tableName: 'User',
    timestamps: false
});

module.exports = User;
