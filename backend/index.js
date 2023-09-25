require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + "/api/uploads"));

const testRouter = require("./api/routes/test.route");
app.use("/api/v1", testRouter);

const userRouter = require("./api/routes/user.route");
app.use("/api/v1", userRouter);

const imageUploadRouter = require("./api/routes/image-upload.routes");
app.use("/api/v1", imageUploadRouter);

require("./api/helpers/mongodb-connect");
const PORT = process.env.PORT || 1198;
app.listen(PORT, console.log(`server running http://localhost:${PORT}`));


