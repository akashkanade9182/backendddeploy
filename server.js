const express = require('express');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const cors=require("cors")

const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

mongoose.connect("mongodb+srv://akashkanade:akash1995@cluster0.vycxlvl.mongodb.net/avatar?retryWrites=true&w=majority", { useNewUrlParser: true });

const storage = new GridFsStorage({
    url: 'mongodb+srv://akashkanade:akash1995@cluster0.vycxlvl.mongodb.net/avatar?retryWrites=true&w=majority',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo);
        });
    }
});
const upload = multer({ storage });


app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});




app.listen(8080, () => {
    console.log('Server started on port 8080');
});