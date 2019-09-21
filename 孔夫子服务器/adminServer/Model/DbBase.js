const mysql = require('mysql');
class DbBase {
    constructor() {
        this.mydb = mysql.createConnection(require('../Config/DbConfig'));
        this.mydb.connect();
    }

    end() {
        this.mydb.end();

    }

}
module.exports = DbBase;