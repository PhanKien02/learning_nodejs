const pool = require("../configs/connectdatabase");
const Product = require("../model/product")
let getCategory = async (req,res) =>{
        const [data,fields] = await pool.execute('select * from category')
        return res.render('create.ejs',{category: data});
}
let postData = async (req,res) =>{
    const sql = 'insert into product (nameProduct,price,amount,categoryId) values(?,?,?,?)'
    console.log(req.body);
    const data= new Product(
        {nameProduct:req.body.product,
        price:req.body.price,
        amount:req.body.amount,
        categoryId:req.body.category})
    console.log(data);
    await pool.query(sql,Object.values(data)).catch(err =>{
        console.log(err);
    })
    return res.redirect('/')  
}
let getProductById = async (req,res) =>{
    console.log(req);
    const [products,fields] = await pool.execute('select * from product where id=?',req.params.id);
    const [categorys,field] = await pool.execute('select * from category')
    console.log(products);
    return res.render('update.ejs',{product : products,category:categorys})  
}
module.exports = {
    getCategory,
    postData,
    getProductById
}