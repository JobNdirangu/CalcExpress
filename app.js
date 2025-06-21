const express = require('express');
const cors=require('cors')
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use(cors())

// Importing the calculator routes
const calc=require('./route/calc')
app.use('/api/calc',calc)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// to install 
// npm init -y
// npm install express mongoose
