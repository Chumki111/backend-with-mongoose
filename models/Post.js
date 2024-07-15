const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String, // or Buffer if storing image data directly
    },
});

module.exports = mongoose.model('Posts', postSchema); // This will refer to the `posts` collection
