const pool = require("../configs/connectdatabase");

let getCategory = async (req,res) =>{
        const [data,fields] = await pool.execute('select * from category')
        return res.render('create_update.ejs',{category: data});
}
let postData = (req,res) =>{
    console.log(req.body);
    console.log(req.body.product);
    try {
        pool.execute('insert into product (nameProduct,price,amount,categoryId) values(?,?,?,?)',[req.body.product,req.body.price,req.body.amount,req.body.category]);      
    } catch (error) {console.log(error);}
    return res.redirect('/')  
}

module.exports = {
    getCategory,
    postData,
}