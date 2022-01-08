const User = require("../models/userModel");

const validateRegisterRequest = (name, email, password) => {
    // Validate user input
    if (!(email && password && name)) {
        throw new ErrorHandler("Mendatory input are empty.!", 400)
    }
}

exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    try {
        // Get user input
        const { name, email, password } = req.body;

        validateRegisterRequest(name, email, password);

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return next(new ErrorHandler("User already registered.!", 400));
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }

});