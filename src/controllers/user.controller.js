const User = require('../models/user.model');

exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json(error);
    }
};
