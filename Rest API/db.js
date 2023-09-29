const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Grand_Hemang:hhhhvvvvbbbb@cluster0.u2uqsdn.mongodb.net/"

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo")
};


module.exports = connectToMongo;

