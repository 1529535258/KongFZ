const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// 跨域处理
app.use(require('./Tools/cors').cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 启用cookie和session
app.use(require('./author').cookie);
app.use(require('./author').session);

app.get('/', (req, res) => {
    res.send('Hello word');
})
//启动子路由
app.use('/goods', require('./Controller/GoodsController'));
app.use('/class', require('./Controller/ClassController'));
app.use('/uploads', require('./Controller/UploadsController'));
app.use('/note', require('./Controller/NoteController'));
app.use('/user',require('./Controller/UserController'));





//静态资源托管
app.use('/upload', express.static(__dirname + "/upload"));



app.listen(98, () => {
    console.log('Server listening on port 98!');

})