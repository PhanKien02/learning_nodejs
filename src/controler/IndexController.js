const connection = require("../configs/connectdatabase");

let getIndex = (req, res) => {
    let data=[]
    connection.query(
        'SELECT * FROM todo',(err, result,fields) =>{
            console.log("check mysql");
            console.log(result);
            data = result.map((row)=>row)
            console.log(JSON.stringify(data));
            return res.render('index.ejs',{todos: data});
        }
    )
};
let getDemo = (rep,res) =>{
    return res.render('demo.ejs')
}
module.exports = {
    getIndex,
    getDemo
}
