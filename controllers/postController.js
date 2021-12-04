const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            postsCount: posts.length,
            posts
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.getSinglePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            success: true,
            post
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json({
            success: true,
            post
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            success: true,
            post
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}