const express = require("express");
const router = express.Router();

const { userUploadImage } = require("../controllers/image-upload.controller");

const upload = require("../middlewares/multer.middleware");

router.post('/user-upload-image', upload.single('file'), userUploadImage);

module.exports = router;
