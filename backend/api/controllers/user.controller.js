const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require("path");

const login = (req, res, next) => {
    // console.log(req.body, "req.body");
    if (typeof req.body.email !== "string" || typeof req.body.password !== "string") {
        return res.status(422).json({
            success: false,
            message: "All parameters required"
        });
    }

    UserModel.findOne({ email: req.body.email.trim().toLowerCase() }).then(async user => {
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        // console.log(comparePassword);
        if (!comparePassword) {
            return res.status(401).json({
                success: false,
                message: "Password mismatch"
            });
        }

        res.status(200).json({
            success: true,
            userid: user.userid,
            name: user.name,
            email: user.email,
            role: user.role
        });
    }).catch(error => {
        console.error("Login failed:", error.message);
        res.status(500).json({ success: false, message: "Login failed" });
    });
};

const allUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find({}).select({ "userid": 1, "name": 1, "email": 1, "role": 1, "_id": 0 });
        res.json({ success: true, users });
    } catch (error) {
        console.error("User listing failed:", error.message);
        res.status(500).json({ success: false, message: "Failed to fetch users" });
    }
};

const getOneUser = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ email: String(req.body.email || "").trim().toLowerCase() });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });
        const userData = {
            success: true,
            userid: user.userid,
            name: user.name,
            email: user.email,
            role: user.role
        };
        // console.log(userData);
        res.json(userData);
    } catch (error) {
        console.error("User fetch failed:", error.message);
        res.status(500).json({ success: false, message: "Failed to fetch user" });
    }
};

const addUser = async (req, res, next) => {
    try {
        const { name, email, password, password_confirm, role } = req.body;

        if (!name || !email || !password || !password_confirm || !role) return res.status(422).json({ success: false, message: "All fields are required" });
        if (password.length < 8) return res.status(422).json({ success: false, message: "Password must contain at least 8 characters" });
        if (password !== password_confirm) return res.status(422).json({ success: false, message: "Passwords do not match" });
        const normalizedEmail = email.trim().toLowerCase();
        const user = await UserModel.findOne({ email: normalizedEmail });
        if (user) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        const userid = "user" + (uuidv4().substring(0, 6));
        const newUser = new UserModel({ userid, name: name.trim(), email: normalizedEmail, password, role });
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "user added successfully"
        });
    } catch (error) {
        console.error("User creation failed:", error.message);
        res.status(500).json({ success: false, message: "Failed to add user" });
    }
};

const updateUser = async (req, res) => {
    try {
        const filter = { email: req.body.email };
        const update = { name: req.body.name, role: req.body.role };
        const updatedUser = await UserModel.findOneAndUpdate(filter, update, { new: true, runValidators: true });
        if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" });
        res.json({
            success: true,
            userid: updatedUser.userid,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role
        });
    } catch (error) {
        console.error("User update failed:", error.message);
        res.status(500).json({ success: false, message: "Failed to update user" });
    }
};

const deleteOneUser = async (req, res) => {
    console.log(req.params, "req.params");
    try {
        const deleted = await UserModel.findOneAndRemove({ email: req.params.email });
        // console.log(deleted);
        // const deleted = true;
        if (deleted == null) {
            res.status(400).send({
                success: false,
                message: req.params.email + ' was not found'
            });
        } else {
            const theFile = path.join(__dirname, "..", "uploads", `${req.params.email}.png`);
            // fs.stat(theFile, (err, stats) => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }
            //     console.log('File size:', stats.size);
            //     console.log('Last modified:', stats.mtime);
            // });
            fs.unlink(theFile, (err) => {
                if (err && err.code !== "ENOENT") console.error("Image deletion failed:", err.message);
            });
            res.status(200).send({
                success: true,
                message: "user deleted"
            });
        }
    } catch (error) {
        console.error("User deletion failed:", error.message);
        res.status(500).json({ success: false, message: "Failed to delete user" });
    }
};

module.exports = {
    login,
    allUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteOneUser,
};

