import mongoose from "mongoose";

async function connectToMongoDB(url) {
    return await mongoose.connect(url);
}

export default connectToMongoDB;