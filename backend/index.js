require("dotenv").config();
const app = require("./app");
const connectMongoDB = require("./api/helpers/mongodb-connect");

const validateEnvironment = () => {
    const missing = ["MONGODB_URI", "MONGODB_DBNAME"].filter((key) => !process.env[key]);
    if (missing.length) throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
};

const startServer = async () => {
    try {
        validateEnvironment();
        await connectMongoDB();
        const port = Number(process.env.PORT) || 1198;
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
        console.error(`Server startup failed: ${error.message}`);
        process.exitCode = 1;
    }
};

if (require.main === module) startServer();

module.exports = { app, startServer, validateEnvironment };
