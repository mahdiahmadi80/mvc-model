const dtb = require('../config/database.js')

exports.getCity = (req, res) => {
    dtb.query('SELECT * FROM city', (err, results) => {
        // if(err){
        //     return res.status(500).send(err);

        // }
        if (err) throw err;
        res.json(results);
    });

}
exports.addCity = (req, res) => {

    const { city, country } = req.body
    dtb.query('INSERT INTO city (name, CountryCode) VALUES (?,?)', [city, country], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("ادد شد");
    })
}

exports.searchCity = (req, res) => {
    const { city, } = req.body
    dtb.query('select * from city where title=?', [city])
}