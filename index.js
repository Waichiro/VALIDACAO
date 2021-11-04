const bodyParser = require("body-parser");
const express = require("express");
const flash = require("express-flash");
const app = express();
const session = require("express-session");


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true}
}));

app.use(flash());

app.get("/", (req, res) => {
    console.log("estou aqui");
    res.send("rodando");
})

app.listen(8080, (req, res) => {
    console.log("Servidor logado...");
})