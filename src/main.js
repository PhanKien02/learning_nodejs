const express = require('express')
const app = express()
const morgan = require('morgan')
const ConfigViewsEngine = require('./configs/viewEngine')
const webRouter = require('./router/route')
const port = 3000
app.use(morgan('combined'))

ConfigViewsEngine(app)

webRouter(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})