const pool = require("../configs/connectdatabase");

let getIndex = async (req, res) => {
    
    const [data,fields] = await pool.execute('select * from product');
    console.log(data);
        return res.render('index.ejs',{product: data});
        
};
module.exports = {
    getIndex,
}
