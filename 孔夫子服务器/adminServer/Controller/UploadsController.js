const express = require('express');
const multer = require('multer');
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../adminServer/upload')  //这里是图片存储路劲
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({
    storage: storage
});

router.post('/imgs', upload.single('file'), function (req, res, next) {
    var url = 'http://' + req.headers.host + '/upload/' + req.file.originalname;
    res.json({
        code: 200,
        data: url
    })
});

module.exports = router;