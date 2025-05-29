const express = require('express');
const cors=require('cors')
const app = express();
app.use(express.json());

app.use(cors())
const calc=require('./routes/calc')
app.use('/api/calc',calc)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// to install 
// npm init -y
// npm install express mongoose
