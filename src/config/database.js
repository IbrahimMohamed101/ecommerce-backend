    const mongoose = require('mongoose');
    const config = require('./environment');

    const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.mongodb.uri, config.mongodb.options);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
    };

    module.exports = connectDB;
