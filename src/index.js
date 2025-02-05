import express from "express";
import mongoose from "mongoose";
import router from "./Router.js"

const PORT = 5001;
const DB_URL = "";

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log("Database connection error:", e);
    }
}

startApp();
