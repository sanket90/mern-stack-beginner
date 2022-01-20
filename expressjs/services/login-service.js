const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const bcrypt = require("bcryptjs");

const {
    validateLoginRequest,
    validatePassword,
    getUserByEmail,
    generateToken
} = require("./user-service");


exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        validateLoginRequest(email, password);

        // Validate if user exist in our database
        const user = await getUserByEmail(email);

        await validatePassword(password, user.password);
        // Create token
        const token = generateToken(user._id, email);

        // save user token
        user.token = token;

        // user
        res.status(200).json(user);
        
    } catch (err) {
        console.log(err);
        next(new ErrorHandler("Invalid Credentials.!", 401));
    }
})