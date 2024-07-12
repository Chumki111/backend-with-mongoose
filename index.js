const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();
const app = express();
const port = process.env.PORT || 5000; 
// middleware

app.use(express.json())
app.use(cors())


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));
// simple route to test server
app.get('/',(req,res) =>{
    res.send('Hello')
})
// start the server
app.listen(port,() =>{
    console.log(`server running on ${port}`);
})