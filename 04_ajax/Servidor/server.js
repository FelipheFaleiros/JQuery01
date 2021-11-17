const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const express = require("express");
const cors = require("cors");
const nedb = require('nedb');
const bodyParser = require("body-parser");
var db = new nedb({filename: 'database.db', autoload: true});

const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({extended : false}))

app.get("/books", (req, res) => {
    db.find({}, (err, books) => {
        
        res.json(books);
        
    });
});


app.delete("/books/:id", (req, res) => {
    db.remove({
        _id: req.params.id
    }, (err) => {
        
        res.json({
            success: true
        });      

    });
    
});

app.post("/books", (req, res) => {
    db.insert({
        name: req.body.name,
        author: req.body.author,
    }, (err, doc) => {
        
        res.json(doc)

    });
});

app.listen(port, () => {

        console.log(`"Servidor executado com sucesso na porta ${port}`)
});