const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const Incident = sequelize.define('Incident', {
    incidentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    severity: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'medium',
        allowNull: false,
        required: true
    },
    location: {
        type: DataTypes.STRING(100),
        required: true,
    },
    openedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    openedAt: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    closedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    closedAt: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    secondsToClose: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
}, {
    tableName: 'Incident',
    timestamps: false
});

module.exports = Incident;
