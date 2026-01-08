import express from "express";
import db from "./config/db.js";
import indexRouter from "./index.route.js";

const app = express();

// DEFINE PORT
app.set("port", process.env.PORT || 3000);

// MIDDLEWARE
app.use(express.json());

// USE ROUTES
app.use("/", indexRouter);

// START 'express' SERVER
app.listen(app.get("port"), () => {
    console.log("Sever is listening on http://localhost:", app.get("port"));
});

// CONNECT TO DATABASE
db.getConnection()
    .then(connection => {
        console.log("Connected to MySQL database");
        connection.release();   // RELEASE THE CONNECTION BACK TO THE POOL
    })
    .catch(err => {
        console.log("Error connecting to the database: ", err.message);
    });