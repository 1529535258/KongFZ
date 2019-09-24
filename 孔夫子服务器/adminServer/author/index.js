const cookieParser = require('cookie-parser');
const session = require('express-session');
// 把session信息存储到数据库里面  1
let MySQLStore = require('express-mysql-session')(session);
// 对cookie信息进行“加密” == 签名  提供字符类型的秘钥
let secret = 'com.mydomain.app.h519061';
exports.cookie = cookieParser(secret);


let sessionStore = new MySQLStore(require(__dirname + '/../Config/dbConfig'));
exports.session = session({
    key: 'sessionid',  //1
    secret: secret,
    resave: false,
    store: sessionStore,   //2
    name: 'sessionid',  //connect.sid
    saveUninitialized: false,
    cookie: { maxAge: 24 * 3600 * 1000 }
})




