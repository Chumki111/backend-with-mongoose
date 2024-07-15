const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        console.log('Fetching all posts');
        const posts = await Post.find(); 
        
        // Fetch all documents from the `posts` collection
        console.log('Posts fetched:', posts);
        res.status(200).json(posts);
    } catch (err) {
        console.log('Error fetching posts:', err);
        res.status(500).json({ error: err.message });
    }
});

// Create a new post
router.post('/posts', async (req, res) => {
    try {
        const newPost = new Post(req.body); // Create a new Post document
        const result = await newPost.save(); // Save the document to the `posts` collection
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single post by ID
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); // Fetch a specific document by ID
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Insert multiple posts
router.post('/posts/bulk', async (req, res) => {
    try {
        const posts = req.body; // Get the array of posts from the request body
        const result = await Post.insertMany(posts); // Insert multiple documents into the `posts` collection
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
