var db = require('./database')
var data = []
module.exports = class {
    static fetchAllCategory() {
        return new Promise((resolve, reject) => {
            var connection = db
            var sql = `SELECT * FROM catalog`;
            connection.query(sql, (err, data) => {
                data = data
                // console.log(data);
                if (err) {
                    return reject(err)
                }
                resolve(data)
            })
        })
    }
}