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
// get a single post by id
router.get('/posts/:id',async(req,res) =>{
   try{
    const id = req.params.id
    const post = await Post.findById(id);
    res.status(200).json(post)
   }catch (err) {
    console.log('Error fetching posts:', err);
    res.status(500).json({ error: err.message });
}

})
router.post('/posts', async (req, res) => {
    try {
        console.log('Incoming request body:', req.body); // Log incoming request body
        const newPost = new Post(req.body);
        const result = await newPost.save();
        res.status(201).json(result);
    } catch (err) {
        console.error('Error saving post:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
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
