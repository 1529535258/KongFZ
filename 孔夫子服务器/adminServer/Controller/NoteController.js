const express = require('express');
const CateModel = require('../Model/NoteModel');
const router = express.Router();

// 返回所有的分类
router.get('/getcate', (req, res) => {
    // 需要对数据进行操作  Model 
    console.log(req.query);
    let cateModel = new CateModel();
    let page = req.query.page ? req.query.page : 1;
    let limitnum = req.query.limit ? req.query.limit : 3;
    cateModel.getAllCate(page, limitnum, (results) => {
        res.json(results);
    });
});

// 返回书界新闻
router.get('/booknews', (req, res) => {
    // 需要对数据进行操作  Model 
    console.log(req.query);
    let cateModel = new CateModel();
    let page = req.query.page ? req.query.page : 1;
    let limitnum = req.query.limit ? req.query.limit : 3;
    cateModel.getAllCate(page, limitnum, (results) => {
        res.json(results);
    });
});

// 返回市场动态
router.get('/market', (req, res) => {
    // 需要对数据进行操作  Model 
    console.log(req.query);
    let cateModel = new CateModel();
    let page = req.query.page ? req.query.page : 1;
    let limitnum = req.query.limit ? req.query.limit : 3;
    cateModel.getmAllCate(page, limitnum, (results) => {
        res.json(results);
    });
});

// 获取一个书界新闻文章详细的信息
router.get('/getinfo', (req, res) => {
    // 需要对数据进行操作  Model 
    let cateModel = new CateModel();
    let bid = req.query.bid;
    console.log(req.query.bid);
    cateModel.getCateByCid(bid, (results) => {
        res.json(results);
    });
});

// 获取一个市场文章详细的信息
router.get('/getwinfo', (req, res) => {
    // 需要对数据进行操作  Model 
    let cateModel = new CateModel();
    let bid = req.query.bid;
    console.log(req.query.bid);
    cateModel.getwCateByCid(bid, (results) => {
        res.json(results);
    });
});



//添加文章
router.post('/addnote', (req, res) => {
    let cateModel = new CateModel();
    cateModel.addnote(req.body, (results) => {
        console.log(results);
        if (results.insertId) {
            res.json({ code: 1, Msg: '添加成功' });
        } else {
            res.json({ code: -1, Msg: '添加失败，请重新操作' });
        }
    });
});



//获取所有的文章信息
router.get('/getallnote', (req, res) => {
    let cateModel = new CateModel();
    cateModel.getAllNote((results) => {
        res.json(results);
    });
});



//删除指定bid的文章信息
router.get('/deletenotebybid', (req, res) => {
    // 需要对数据进行操作  Model 
    let cateModel = new CateModel();
    let bid = req.query.bid;
    cateModel.deleteNoteByBid(bid, (results) => {
        console.log(results);
        if (results.affectedRows) {
            res.json({ code: 1, Msg: '操作成功' });
        } else {
            res.json({ code: -1, Msg: '操作失败，请刷新后重新操作' });
        }
    });
});



//模糊查询商品信息
router.get('/searchnote', (req, res) => {
    let cateModel = new CateModel();
    let info = req.query.info;
    cateModel.searchNote(info, (results) => {
        res.json(results);
    });
});




// // 添加商品
// router.post('/addGoods', (req, res) => {
//     console.log(req.body);
//     let cateModel = new CateModel();
//     cateModel.addgoods(req.body, (results) => {
//         console.log(results);
//         if (results.insertId) {
//             res.json({ code: 1, Msg: '添加成功' });
//         } else {
//             res.json({ code: -1, Msg: '添加失败，请重新操作' });
//         }
//     });
// });


// //获取所有的商品信息
// router.get('/getallgoods', (req, res) => {
//     let cateModel = new CateModel();
//     cateModel.getAllGoods((results) => {
//         res.json(results);
//     });
// });

// //获取所有的已售商品信息
// router.get('/getsoldgoods', (req, res) => {
//     let cateModel = new CateModel();
//     cateModel.getSoldGoods((results) => {
//         res.json(results);
//     });
// });



// //获取指定bid的商品信息
// router.get('/getgoodsbybid', (req, res) => {
//     let cateModel = new CateModel();
//     let bid = req.query.bid;
//     cateModel.getGoodsByGid(bid, (results) => {
//         console.log(results);
//         res.json(results);
//     });
// });

// //删除指定bid的商品
// router.get('/deletegoodsbybid', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let bid = req.query.bid;
//     console.log(req.query.bid);
//     cateModel.deleteGoodsByBid(bid, (results) => {
//         console.log(results);
//         if (results.affectedRows) {
//             res.json({ code: 1, Msg: '操作成功' });
//         } else {
//             res.json({ code: -1, Msg: '操作失败，请刷新后重新操作' });
//         }
//     });
// });


// //模糊查询商品信息
// router.get('/searchgoods', (req, res) => {
//     let cateModel = new CateModel();
//     let bookname = req.query.bookname;
//     cateModel.searchGoods(bookname, (results) => {
//         res.json(results);
//     });
// });

// //模糊查询已售商品信息
// router.get('/searchsoldgoods', (req, res) => {
//     let cateModel = new CateModel();
//     let info = req.query.info;
//     cateModel.searchSoldGoods(info, (results) => {
//         res.json(results);
//     });
// });

//添加商品分类
// router.post('/addgoodscate', (req, res) => {
//     console.log(req.body);//object
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     cateModel.addgoodscate(req.body, (results) => {
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

//删除指定的分类
// router.post('/delgoodscate', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let id = req.body.cid;
//     cateModel.delGoodsCate(id, (results) => {
//         if (results.affectedRows) {
//             res.json({ code: 1, Msg: '操作成功' });
//         } else {
//             res.json({ code: -1, Msg: '操作失败，请刷新后重新操作' });
//         }
//     });
// });

// //获取一个的分类信息
// router.get('/getgoodscate', (req, res) => {
//     // 需要对数据进行操作  Model 
//     let cateModel = new CateModel();
//     let cid = req.query.cid;
//     cateModel.getGoodsCateByCid(cid, (results) => {
//         res.json(results);
//         console.log(results);
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


module.exports = router;