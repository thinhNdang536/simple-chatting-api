const User = require('../models/community.model');

exports.getCommunity = async (req, res) => {
    try {
        const communityId = req.params.id;
        if (communityId === undefined) {
            return res.status(400).json({ message: 'Community ID is required' });
        }

        const community = await User.findByPk(communityId);
        if (community) {
            res.status(200).json(community);
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        res.json(error);
    }
};
