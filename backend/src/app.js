import express from "express";
import db from "./config/db.js";
import indexRouter from "./index.route.js";
import path from "path";
import { fileURLToPath } from "url";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// NECESARIO PARA __dirname EN ES MODULES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DEFINE PORT
app.set("port", process.env.PORT || 3000);

// MIDDLEWARE
app.use(express.json());

// SERVIR ARCHIVOS ESTÁTICOS (FRONTEND)
app.use(express.static(path.join(__dirname, "../../frontend")));

// USE ROUTES
app.use("/", indexRouter);

app.use(errorMiddleware);

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