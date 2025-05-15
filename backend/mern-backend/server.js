const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load enviornment variables from .env file
dotenv.config();

//Initialise express app
const app = express();
const PORT = process.env.PORT || 5000;


//Middleware to parse JSON bodies
app.use(express.json());

//MONGODB connection 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//User Routes
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log('MongoDB connected'))
.catch(err => console.error('Error',err));


//Start the server
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)