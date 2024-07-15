const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    credentials: true, // Allow credentials
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization' // Allowed headers
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => console.log('MongoDB connected to Blogs database'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
const postRoutes = require('./routes/posts');
app.use('/api', postRoutes);

// Simple route to test server
app.get('/', (req, res) => {
    res.send('Hello from the Blogs API');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
