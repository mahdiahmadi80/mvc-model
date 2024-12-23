const dtb= require('../config/database.js')

exports.getCity = (req,res)=>{
    dtb.query('SELECT * FROM city', (err, results) => {
        // if(err){
        //     return res.status(500).send(err);
    
        // }
        if (err) throw err;
        res.json(results);
    });

}