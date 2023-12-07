import express from "express";
import path from "path";

import { LocalStorage } from "node-localstorage";
import multer from "multer";

export const localStorage = new LocalStorage('../localStorage');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.dirname("public") + "/public");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({ storage: storageConfig });

const uploadRouter = express.Router();

uploadRouter.post("/", upload.single("image"), (req, res) => {
    localStorage.setItem('imagePath', req.file.path)
    res.send(req.file.path);
});

export default uploadRouter;
