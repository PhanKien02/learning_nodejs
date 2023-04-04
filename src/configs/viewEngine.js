const express = require('express')

const ConfigViewsEngine = (app) =>{
    app.use(express.static('src/resources'))
    app.set("view engine", "ejs");
    app.set("views", 'src/resources/views')
};

module.exports =  ConfigViewsEngine