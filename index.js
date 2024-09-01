const express = require("express");
const cors = require("cors"); 

const app = express(); 
const port = 5000;

app.use(cors()); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/', function(req, res) {
    const fruitName = req.body.fruitName; 
    const fruits = [fruitName];
    console.log(fruits);
    res.send("Fruit added sucessfully");
});

app.listen(port, function() {
    console.log(`Port Running ${port}`);
});
