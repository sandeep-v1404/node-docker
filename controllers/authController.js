const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

exports.signUp = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashPassword = await bcryptjs.hash(password, 12);
        const userExists = await User.find({ username });
        if (userExists.length) {
            res.status(400).json({
                error: "User already exists"
            })
        }
        else {
            const user = await User.create({
                username,
                password: hashPassword,
            });
            req.session.user = user;
            res.status(201).json({
                success: true,
                user,
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
        })
    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            username,
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        const checkPassword = await bcryptjs.compare(password, user.password);
        if (checkPassword) {
            req.session.user = user;
            res.status(201).json({
                success: true,
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Not Found"
            })
        }
        else {
            res.status(200).json({
                success: true,
            })
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
}