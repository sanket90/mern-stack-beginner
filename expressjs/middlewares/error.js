const ErrorHandler = require("../utils/errorHandler");

// 404 Error Handler
exports.defaultClientErrorHandler = (request, response, next) => {
    err.statusCode = err.statusCode || 404;
    err.message = err.message || "Not Found.!";
    
    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};

// Default Error Handler
exports.defaultServerErrorHandler = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //WRONG MONGO ID ERROR
    if(err.name === 'CasrError'){
        const message = `Resource not found, invalid entry ${error.path}`;
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};