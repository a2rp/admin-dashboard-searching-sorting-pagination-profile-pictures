const mongoose = require("mongoose");

const connectMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DBNAME });
    console.log("MongoDB connected successfully");
};

module.exports = connectMongoDB;
