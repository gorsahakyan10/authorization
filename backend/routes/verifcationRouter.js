import express from "express";
import connection from "../index.js";
import checkingRegistration from "../functions/checkingRegistration.js";

const verifcationRouter = express.Router();

verifcationRouter.post("/", (req, res) => {
    const { username } = req.body;
    connection.query("USE users");
    connection.query(
        "SELECT * FROM users WHERE username=?",
        [username],
        (err, users) => {
            if (err){
                console.log(err);
            }else{
                res.send(checkingRegistration(users));
            }
        }
    );
});

export default verifcationRouter;
