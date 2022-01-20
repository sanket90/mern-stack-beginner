const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



exports.validateRegisterRequest = (name, email, password) => {
    if (!(email && password && name)) {
        throw new ErrorHandler("Mendatory input are empty.!", 400)
    }
}

exports.checkIfUserAlreadyExists = async (email) => {

    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
        throw new ErrorHandler("User already registered.!", 400);
    }
}

exports.createNewUserInDatabase = async (name, email, encryptedPassword) => {
    return await User.create({
        name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
    });
}

exports.generateToken = (user_id, email) => {
    return jwt.sign(
        { user_id, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
}

exports.validateLoginRequest = (email, password) => {
    if (!(email && password)) {
        throw new ErrorHandler("Mendatory input are empty.!", 400)
    }
}

exports.getUserByEmail = async (email) => {

    // Validate if user exist in our database
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        throw new ErrorHandler("User does not exists!", 400);
    }

    return existingUser;
}

exports.validatePassword = async (password, userPassword) => {
    if (await !bcrypt.compare(password, userPassword)) {
        throw new ErrorHandler("Invalid Credentials!", 400);
    }
}