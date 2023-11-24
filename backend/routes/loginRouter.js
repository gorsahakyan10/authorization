import express from "express";
import connection from "../index.js";
import checkingLogin from "../functions/checkingLogin.js";

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
    const { username, password } = req.body;
    connection.query("USE users");
    connection.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.send(checkingLogin(users));
            }
        }
    );
});

export default loginRouter;