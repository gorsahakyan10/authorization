import express from "express";
import connection from "../index.js";
import { localStorage } from "./uploadRouter.js";

const registrationRouter = express.Router();

registrationRouter.post("/", (req, res) => {
    const { name, surname, username, password } = req.body;
    connection.query("USE users");
    connection.query(
        `INSERT INTO users ( id, name, surname, username, password, imageURL) VALUES 
        ( uuid(), ?, ?, ?, ?, ? )`,
        [name, 
        surname,
        username,
        password,
        `http://localhost:8000/${localStorage.getItem('imagePath')
                            .replaceAll("..", "")
                            .replaceAll("\\", "/")}`,
        ],
        (err, data) => {
            if (err) {
                throw err;
            } else {
                res.send(JSON.stringify([]));
            }
        }
    );
});

export default registrationRouter;
