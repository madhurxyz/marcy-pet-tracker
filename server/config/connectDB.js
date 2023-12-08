if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}

const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Success: DB Connected!")
    } catch (error) {
        console.log("Error: DB Connection Failed!");
    }
}

module.exports = connectDB;