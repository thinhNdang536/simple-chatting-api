const Notification = require('../models/notification.model');

exports.getNotification = async (req, res) => {
    try {
        const userId = req.params.userid;
        if (userId === undefined) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const notification = await Notification.findAll({
            where: { userId: userId }
        });
        if (notification) {
            res.status(200).json(notification);
        }
    } catch (error) {
        res.json(error);
    }
};
