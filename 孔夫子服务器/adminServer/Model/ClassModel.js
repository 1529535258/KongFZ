const DbBase = require('./DbBase');
class CateModel extends DbBase {
    constructor() {
        super();
        this.class = 'category';
        this.goodstable = 'goods';
    }

    //得到所有的分类名称
    getAllClass(callback) {
        let sql = `SELECT * FROM ${this.class}`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }
    //添加商品分类addgoodscate
    addgoodscate(cateinfo, callback) {
        let sql = `INSERT INTO ${this.class}(catename,fid) VALUES ("${cateinfo.name}",${cateinfo.cid})`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }

    deleteClassByBid(cid, callback) {
        let sql = `DELETE FROM ${this.class} WHERE cid = ${cid}`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }


    getClassByCid(cid, callback) {
        let sql = `SELECT * FROM ${this.class} WHERE cid = ${cid}`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }



    // getGoodsByGid(gid,callback) {
    //     let sql = `SELECT * FROM ${this.goodstable} WHERE gid = ${gid}`;
    //     this.mydb.query(sql, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             callback(err);
    //         } else {
    //             callback(results);
    //         }
    //         this.mydb.end();
    //     })
    // }





    //     getAllCate(page, limitnum, callback) {
    //         let countsql = `SELECT COUNT(*) as nums FROM  ${this.table} WHERE 1;`;
    //         let sql = `SELECT * FROM ${this.table} WHERE 1 LIMIT ${(page - 1) * limitnum}, ${limitnum}`;
    //         this.mydb.query(countsql + sql, (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err);
    //             } else {
    //                 callback(results);
    //                 console.log(results);

    //             }
    //             this.mydb.end();
    //         })
    //     }


    //     delGoods(gid, callback) {
    //         let sql = `DELETE FROM ${this.goodstable} WHERE gid = ${gid}`;
    //         this.mydb.query(sql, (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err);
    //             } else {
    //                 console.log(results);
    //                 callback(results);
    //             }
    //             this.mydb.end();
    //         })
    //     }



    //     updateGoodsCate(cateinfo, callback) {
    //         let sql = `UPDATE ${this.table} SET categoryname = "${cateinfo.categoryname}" WHERE cid =${cateinfo.cid}`;
    //         this.mydb.query(sql, (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err);
    //             } else {
    //                 callback(results);
    //             }
    //             this.mydb.end();
    //         })
    //     }

    //     updateGoods(goodsinfo, callback) {
    //         let sql = `UPDATE ${this.goodstable} SET
    //         goodsname = "${goodsinfo.goodsname}",
    //         goodsspicy = "${goodsinfo.goodsspicy}",
    //         goodsprice = "${goodsinfo.goodsprice}",
    //         goodsstyle = "${goodsinfo.goodsstyle}",
    //         goodsmaterial = "${goodsinfo.goodsmaterial}",
    //         note = "${goodsinfo.note}",
    //         image = "${goodsinfo.image}"
    //         WHERE gid =${goodsinfo.gid}`;
    //         this.mydb.query(sql, (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err);
    //             } else {
    //                 callback(results);
    //             }
    //             this.mydb.end();
    //         })
    //     }

    //     addgoods(cateinfo, callback) {
    //         console.log(cateinfo);
    //         let fieldstr = '', field = '';
    //         let data = [];
    //         let isFirst = true;
    //         for (const f in cateinfo) {
    //             if (cateinfo.hasOwnProperty(f)) {
    //                 fieldstr += (isFirst ? '' : ',') + f;//组装字段  也可以组织成数组，最后JOIN
    //                 field += (isFirst ? '' : ',') + '?'; //组装字段
    //                 data.push(cateinfo[f]);//组装字段对应的值
    //             }
    //             isFirst = false;
    //         }
    //         let sql = `INSERT INTO ${this.goodstable}(${fieldstr}) VALUES (${field})`;
    //         this.mydb.query(sql, data, (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err);
    //             } else {
    //                 callback(results);
    //             }
    //             this.mydb.end();
    //         })
    //     }


    //     getAllGoods(page, limitnum, callback) {
    //         let sql = `SELECT * FROM ${this.goodstable} WHERE 1 LIMIT ${(page - 1) * limitnum}, ${limitnum}`;
    //         // let countsql = `SELECT COUNT(*) as nums FROM  ${this.table} WHERE 1;`;
    //         // let sql = `SELECT * FROM ${this.table} WHERE 1 LIMIT ${(page - 1) * limitnum}, ${limitnum}`;
    //         this.mydb.query(sql, (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err);
    //             } else {
    //                 callback(results);
    //             }
    //             this.mydb.end();
    //         })
    //     }

}

module.exports = CateModel;