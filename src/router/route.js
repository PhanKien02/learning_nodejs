const express =require('express')
const IndexController = require('../controler/IndexController')
const router = express.Router()

const webRouter = (app) =>{

    router.get('/',IndexController.getIndex)
    router.get('/demo', IndexController.getDemo)
    
    return app.use('/',router)
}
module.exports = webRouter