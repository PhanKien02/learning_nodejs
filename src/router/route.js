const express =require('express')
const IndexController = require('../controler/IndexController')
const formController = require('../controler/formController')
const router = express.Router()

const webRouter = (app) =>{

    router.get('/',IndexController.getIndex)
    router.route('/create').get(formController.getCategory)
    .post(formController.postData)
    router.post('/delete/:id',IndexController.deleteProduct);
    router.delete('/update/:id',formController.getProductById);
    return app.use('/',router)
}
module.exports = webRouter