import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true,
    },

    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],

},{timestamps: true});

const URL = mongoose.model("url", urlSchema);

export default URL;