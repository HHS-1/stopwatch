"use strict"

const express = require('express');
const app = express();

app.set("view engine" , "ejs");
app.use(express.static("css"));
app.use(express.static("views"));
app.get("/",(req, res)=>{
    res.render("index", {});
});

module.exports = app;