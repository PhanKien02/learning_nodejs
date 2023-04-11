const pool = require("../configs/connectdatabase");

let getIndex = async (req, res) => {
    
    const [data,fields] = await pool.execute('select * from product');
    console.log(data);
        return res.render('index.ejs',{product: data});
        
};
let deleteProduct = async(req,res) =>{
    await pool.execute("delete from product where id=?",[req.params.id])
    return res.redirect('/')
}
module.exports = {
    getIndex,
    deleteProduct
}
