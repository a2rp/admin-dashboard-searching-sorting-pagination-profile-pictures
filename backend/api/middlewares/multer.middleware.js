const multer = require("multer");
const path = require('path')

//configure how the files are stored
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(file, "multer file storage");
        //where to store the file
        cb(null, "api/uploads");
    },
    filename: function (req, file, cb) {
        // console.log(file, "multer file");
        // cb(null, new Date().toISOString() + file.originalname);
        // cb(null, Date.now() + file.originalname);
        cb(null, req.body.email + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    // console.log(file, "multer file");
    //reject a file if it's not a png
    if (file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

module.exports = upload;