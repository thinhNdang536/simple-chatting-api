const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const Post = sequelize.define('Post', {
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        required: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    communityId: {
        type: DataTypes.INTEGER.UNSIGNED,
        required: true,
    },
    title: {
        type: DataTypes.STRING(100),
        required: true,
    },
    body: {
        type: DataTypes.STRING(500),
        required: true,
    },
    createAt: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    tagList: {
        type: DataTypes.STRING(100),
        defaultValue: 'exampleTag'
    },
    isPinned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    viewCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    tableName: 'Post',
    timestamps: false
});

module.exports = Post;
