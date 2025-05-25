const express = require('express');
const router = express.Router();

// Add
router.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.json({message: "Addition successful",num1,num2,result: sum });
});

// Subtract
router.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const difference = num1 - num2;
    res.json({message: "Subtraction successful",num1,num2,result: difference });
});

// Multiply
router.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const product = num1 * num2;
    res.json({message: "Multiplication successful",num1,num2,result: product });
});

// Divide
router.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        res.status(400).json({error: "Division by zero is not allowed"});
    }
    const quotient = num1 / num2;
    res.json({message: "Division successful",num1,num2,result: quotient });
});

router.get('/',(req,res)=>{
    res.json({message: 'Welcome to the Calculator API!', instructions: 'Use POST requests to /add, /subtract, /multiply, or /divide'})

})
module.exports = router;

