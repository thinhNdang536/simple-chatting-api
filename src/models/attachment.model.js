const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const Attachment = sequelize.define('Attachment', {
    attachmentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    name: {
        type: DataTypes.STRING(100),
        required: true,
    },
    type: {
        type: DataTypes.ENUM('text', 'image', 'video', 'audio', 'document'),
        allowNull: false,
        required: true
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: false,
        required: true
    },
    // size: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     required: true
    // },
    uploadBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        required: true
    },
    uploadAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        required: true
    }
}, {
    tableName: 'Attachment',
    timestamps: false
});

module.exports = Attachment;
