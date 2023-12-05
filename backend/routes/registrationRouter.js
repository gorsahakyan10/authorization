import express from "express";
import connection from "../index.js";

const registrationRouter = express.Router();

registrationRouter.post("/", (req, res) => {
    const { name, surname, username, password } = req.body;
    connection.query("USE users");
    connection.query(
        `INSERT INTO users ( id, name, surname, username, password ) VALUES 
        ( uuid(), ?, ?, ?, ? )`,
        [name, surname, username, password],
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
