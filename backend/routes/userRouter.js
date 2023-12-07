import express from "express";
import connection from "../index.js";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
    const { id, username } = req.body;
    connection.query("USE users");
    connection.query(
        "SELECT * FROM users WHERE id=? OR username=?",
        [id, username],
        (err, users) => {
            if(err){
               console.log(err);
            }else{
               res.send(JSON.stringify(users[0] || {}));
            }
        }
    );
});

export default userRouter;
