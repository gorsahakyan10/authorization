import express from "express";
import connection from "../index.js";

const registrationRouter = express.Router();

registrationRouter.post("/", (req, res) => {
    const { name, username, password } = req.body;
    connection.query("USE users");
    connection.query(
        `INSERT INTO users ( id, name, username, password ) VALUES 
        ( uuid(), ?,?,? )`,
        [name, username, password],
        (err, data) => {
           if(err){
              throw err
           }else{
              res.send(JSON.stringify({ err: false, errName:''}))
           }
        }
    );
});

export default registrationRouter;
