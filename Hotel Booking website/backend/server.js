const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const { Server } = require("http");

//HANDLING UNCAUGHT EXCEPTION

process.on("uncaughtException",(err)=>{

    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})

//CONFIGURATION

dotenv.config({path:"backend/config/config.env"});

//CONNECT TO DATABASE

connectDatabase()

const server = app.listen(process.env.PORT,()=>{

    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


//UNHANDLED PROMISE REJECTION

process.on("unhandledRejection",err=>{

    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
});
