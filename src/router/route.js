const express =require('express')
const IndexController = require('../controler/IndexController')
const CreateController = require('../controler/formController')
const router = express.Router()

const webRouter = (app) =>{

    router.get('/',IndexController.getIndex)
    router.route('/create').get(CreateController.getCategory)
    .post(CreateController.postData)
    return app.use('/',router)
}
module.exports = webRouter