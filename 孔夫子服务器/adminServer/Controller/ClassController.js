const express = require('express');
const CateModel = require('../Model/ClassModel');
const router = express.Router();

// router.get('/getgoodsbygid', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let gid = req.query.gid;
//     cateModel.getGoodsByGid(gid,(results) => {
//         res.json(results);
//     });
// });

router.get('/getallclass', (req, res) => {
    // 需要对数据进行操作  Model 
    let cateModel = new CateModel();
    cateModel.getAllClass((results) => {
        res.json(results);
    });
});

// 添加商品分类
router.post('/sendTwoClass', (req, res) => {
    console.log(req.body);
    delete req.body.type;
    let cateModel = new CateModel();
    cateModel.addgoodscate(req.body, (results) => {
        if (results.insertId) {
            res.json({ code: 1, Msg: '添加成功' });
        } else {
            res.json({ code: -1, Msg: '添加失败，请重新操作' });
        }
    });
});



//删除指定cid的分类
router.get('/deleteclassbybid', (req, res) => {
    // 需要对数据进行操作  Model 
    let cateModel = new CateModel();
    let cid = req.query.cid;
    cateModel.deleteClassByBid(cid, (results) => {
        if (results.affectedRows) {
            res.json({ code: 1, Msg: '操作成功' });
        } else {
            res.json({ code: -1, Msg: '操作失败，请刷新后重新操作' });
        }
    });
});



//获取指定cid的分类名称
router.get('/getclassbycid', (req, res) => {
    // 需要对数据进行操作  Model 
    let cateModel = new CateModel();
    let cid = req.query.cid;
    cateModel.getClassByCid(cid, (results) => {
        res.json(results);
    });
});




//添加商品
// router.post('/addgoods', (req, res) => {
//     console.log(req.body);//object
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     delete req.body.avatar;
//     delete req.body.file;

//     delete req.body.note.nbsp;;
//     console.log(req.body);//object
//     cateModel.addgoods(req.body, (results) => {
//         console.log(results);
//         if (results.insertId) {
//             res.json({ code: 1, Msg: '添加成功' });
//         } else {
//             res.json({ code: -1, Msg: '添加失败，请重新操作' });
//         }
//     });
// });


// 获取所有的分类信息
// router.get('/getallgoodscate', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let page = req.query.page ? req.query.page : 1;
//     let limitnum = req.query.limit ? req.query.limit : 10;
//     cateModel.getAllCate(page, limitnum, (results) => {
//         let ob = { "code": 0, "msg": "", "count": results[0][0].nums, "data": results[1] }
//         res.json(ob);
//     });
// });




//获取一个的商品信息
// router.get('/getgoods', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let gid = req.query.gid;
//     cateModel.getGoodsByGid(gid, (results) => {
//         res.json(results);
//         console.log(results);
//     });
// });


// //更新数据库中分类名称
// router.post('/updategoodscate', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     cateModel.updateGoodsCate(req.body, (results) => {
//         if (results.affectedRows) {
//             res.json({ code: 1, Msg: '修改成功！' });
//         } else {
//             res.json({ code: -1, Msg: '修改失败，请重新操作！' });
//         }
//     });
// });

//更新数据库中商品信息名称
// router.post('/updategoods', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     delete req.body.avatar;
//     console.log(req.body);
//     cateModel.updateGoods(req.body, (results) => {
//         if (results.affectedRows) {
//             res.json({ code: 1, Msg: '修改成功！' });
//         } else {
//             res.json({ code: -1, Msg: '修改失败，请重新操作！' });
//         }
//     });
// });



//获取所有的商品
// router.get('/getallgood', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();

//     let page = req.query.page ? req.query.page : 1;
//     let limitnum = req.query.limit ? req.query.limit : 10;
//     cateModel.getAllGoods(page, limitnum, (results) => {
//         let ob = { "code": 0, "msg": "", "count": 11, "data": results }
//         // let ob = { "code": 0, "msg": "", "count": results[0][0].nums, "data": results[1] }
//         res.json(ob);
//     });
// });



//删除指定的分类
// router.post('/delgoods', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let id = req.body.gid;
//     cateModel.delGoods(id, (results) => {
//         if (results.affectedRows) {
//             res.json({ code: 1, Msg: '操作成功' });
//         } else {
//             res.json({ code: -1, Msg: '操作失败，请刷新后重新操作' });
//         }
//     });
// });
module.exports = router;