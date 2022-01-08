const User = require("../models/userModel");

const {
    validateRegisterRequest,
    checkIfUserAlreadyExists,
    createNewUserInDatabase,
    generateToken
} = require("./user-service");


exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    try {
        // Get user input
        const { name, email, password } = req.body;

        // Validate user input
        validateRegisterRequest(name, email, password);

        // check if user already exist
        checkIfUserAlreadyExists(email);

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await createNewUserInDatabase(name, email, encryptedPassword);

        // Create token
        const token = generateToken(user._id, email);
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        next(err);
    }
});