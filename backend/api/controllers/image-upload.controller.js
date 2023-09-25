
const userUploadImage = async (req, res, next) => {
    // console.log(req.body, "req.body");
    // console.log(req.file, "req.file");
    try {
        console.log(req.body.email, "req.body");
        if (req.file) {

            res.json({
                success: true,
                message: "Image Uploaded Successfully"
            });
        } else {
            res.json({
                success: false,
                message: "Error Uploading File"
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    userUploadImage
};

