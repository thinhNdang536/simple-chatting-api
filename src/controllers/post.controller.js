const Poll = require('../models/poll.model');
const Post = require('../models/post.model');
const Incident = require('../models/incident.model');
const Attachment = require('../models/attachment.model');

async function getPollData(post, postId) {
    const pollData = await Poll.findOne({
        where: { postId: postId }
    });
    return pollData ? pollData.toJSON() : {};
}

async function getIncidentData(post, postId) {
    const incidentData = await Incident.findOne({
        where: { postId: post.postId }
    });
    return incidentData ? incidentData.toJSON() : {};
}

async function getPostAttachments(postId, postId) {
    const attachments = await Attachment.findAll({
        where: { postId: postId }
    });
    return attachments.map(attachment => attachment.toJSON());
}

exports.getPost = async (req, res) => {
    try {
        const postId = req.params.id;
        if (postId === undefined) {
            return res.status(400).json({ message: 'Post ID is required' });
        }

        const post = await Post.findByPk(postId);
        if (post) {
            const postData = post.toJSON();
            switch (post.postType) {
                case 'feed':
                    postData.type = 'Feed';
                    break;
                case 'poll':
                    postData.poll = getPollData(post, postId);
                    break;
                case 'incident':
                    postData.incident = getIncidentData(post, postId);
                    break;
                default:
                    postData.type = 'Unknown';
            }

            postData.attachments = await getPostAttachments(postId, postId);
            res.status(200).json(postData);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.json(error);
    }
};
