const express = require('express')
const app = express()
const morgan = require('morgan')
const ConfigViewsEngine = require('./configs/viewEngine')
const port = 3000
app.use(morgan('combined'))

ConfigViewsEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})