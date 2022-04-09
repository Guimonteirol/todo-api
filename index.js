require('dotenv/config');
require('./db');

const express = require('express');
const flash = require("connect-flash");
const exprhbs = require("express-handlebars")
const routes = require("./routes/todoRouters");
const port = process.env.PORT || 8000;

const app = express();
app.use(flash());

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exprhbs.engine(
    {
        defaultLayout:'main'
    }
));
app.set("view engine", "handlebars");
app.use(routes)

app.use((req, res, next) => {
    res.status(404).json({message: "Endpoint não encontrado"})
})

app.listen(port, ()=>{
    console.log(`Serve started on port ${port}`)
})

