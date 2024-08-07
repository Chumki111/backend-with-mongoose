const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
   
    author: {
        type: String,
        required: true
    },
   
    image: {
        type: String, // or Buffer if storing image data directly
    },
    category: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Posts', postSchema); // This will refer to the `posts` collection
