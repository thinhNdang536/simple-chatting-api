const Post = require('../models/post.model');

exports.getPost = async (req, res) => {
    try {
        const postId = req.params.id;
        if (postId === undefined) {
            return res.status(400).json({ message: 'Post ID is required' });
        }

        const post = await Post.findByPk(postId);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.json(error);
    }
};
