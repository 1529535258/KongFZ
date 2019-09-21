const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// 跨域处理
app.use(require('./Tools/cors').cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello word');
})
//启动子路由
app.use('/goods', require('./Controller/GoodsController'));
app.use('/class', require('./Controller/ClassController'));
app.use('/uploads', require('./Controller/UploadsController'));



//静态资源托管
// app.use('/uploadss', express.static(__dirname + "/uploads"));



app.listen(98, () => {
    console.log('Server listening on port 98!');

})