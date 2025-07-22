const User = require('../models/user.model');

exports.authenticateUser = async (req, res) => {
    try {
        const { payload } = req.body;

        const email = payload.email;
        const password = payload.password;
        if (email === undefined || password === undefined) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        const userRecord = await User.findOne({ where: { email: email } }); // Use findOne with where clause
        if (userRecord) {
            if (userRecord.password !== password) {
                return res.status(403).json({ message: 'Unauthorized access' });
            }
            const user = userRecord ? userRecord.toJSON() : null;
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.json(error);
    }
};
