const DbBase = require('./DbBase');
class CateModel extends DbBase {
    constructor() {
        super();
        this.books = 'books';
        this.soldgoods = 'sold';
        this.film = 'film';
        this.market = 'market'
    }

    getAllCate(page, limitnum, callback) {
        // SQL语句用分号结束
        let countsql = `SELECT COUNT(*) as nums FROM  ${this.film} WHERE 1;`;
        let sql = `SELECT * FROM  ${this.film} WHERE 1 LIMIT ${(page - 1) * limitnum}, ${limitnum};`;
        this.mydb.query(countsql + sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }


    //获取书界新闻动态信息
    getCateByCid(cid, callback) {
        let sql = `SELECT * FROM  ${this.film} WHERE bid = ?`;
        this.mydb.query(sql, [cid], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }


    //获取市场详细动态信息
    getwCateByCid(cid, callback) {
        let sql = `SELECT * FROM  market WHERE bid = ?`;
        this.mydb.query(sql, [cid], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }

    getmAllCate(page, limitnum, callback) {
        // SQL语句用分号结束
        let countsql = `SELECT COUNT(*) as nums FROM  ${this.film} WHERE 1;`;
        let sql = `SELECT * FROM  market WHERE 1 LIMIT ${(page - 1) * limitnum}, ${limitnum};`;
        this.mydb.query(countsql + sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }



    addnote(cateinfo, callback) {
        let fieldstr = '', field = '';
        let data = [];
        let isFirst = true;
        for (const f in cateinfo) {
            if (cateinfo.hasOwnProperty(f)) {
                fieldstr += (isFirst ? '' : ',') + f;
                field += (isFirst ? '' : ',') + '?';
                data.push(cateinfo[f]);//组装字段对应的值
            }
            isFirst = false;
        }
        console.log(fieldstr);
        console.log(field);
        let sql = `INSERT INTO ${this.market}(${fieldstr}) VALUES (${field})`;
        this.mydb.query(sql, data, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }


    getAllNote(callback) {
        let sql = `SELECT * FROM ${this.film}`;
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

    deleteNoteByBid(bid, callback) {
        let sql = `DELETE FROM ${this.film} WHERE bid = ${bid}`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }


    searchNote(info, callback) {
        let sql = `SELECT * FROM ${this.film} WHERE 1 `;
        if (info) {
            sql += `and filmname like "%${info}%"`;
        }
        this.mydb.query(sql, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        })
    }










    // addgoods(cateinfo, callback) {
    //     let fieldstr = '', field = '';
    //     let data = [];
    //     let isFirst = true;
    //     for (const f in cateinfo) {
    //         if (cateinfo.hasOwnProperty(f)) {
    //             fieldstr += (isFirst ? '' : ',') + f;
    //             field += (isFirst ? '' : ',') + '?';
    //             data.push(cateinfo[f]);//组装字段对应的值
    //         }
    //         isFirst = false;
    //     }
    //     // console.log(fieldstr,data);
    //     let sql = `INSERT INTO ${this.books}(${fieldstr}) VALUES (${field})`;
    //     this.mydb.query(sql, data, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             callback(err);
    //         } else {
    //             callback(results);
    //         }
    //         this.mydb.end();
    //     })
    // }


    // getAllGoods(callback) {
    //     let sql = `SELECT * FROM ${this.books}`;
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

    // getSoldGoods(callback) {
    //     let sql = `SELECT * FROM ${this.soldgoods}`;
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


    // searchSoldGoods(info, callback) {
    //     let sql = `SELECT * FROM ${this.soldgoods} WHERE 1 `;
    //     if (info) {
    //         sql += `and bookname like "%${info}%"`;
    //     }
    //     this.mydb.query(sql, (err, results) => {
    //         if (err) {
    //             callback(err);
    //         } else {
    //             callback(results);
    //         }
    //         this.mydb.end();
    //     })
    // }

    // getGoodsByGid(bid, callback) {
    //     let sql = `SELECT * FROM ${this.books} WHERE bid = ${bid}`;
    //     this.mydb.query(sql, (err, results) => {
    //         if (err) {
    //             callback(err);
    //         } else {
    //             callback(results);
    //         }
    //         this.mydb.end();
    //     })
    // }

    // deleteGoodsByBid(bid, callback) {
    //     let sql = `DELETE FROM ${this.books} WHERE bid = ${bid}`;
    //     this.mydb.query(sql, (err, results) => {
    //         if (err) {
    //             callback(err);
    //         } else {
    //             callback(results);
    //         }
    //         this.mydb.end();
    //     })
    // }

    // searchGoods(bookname, callback) {
    //     let sql = `SELECT * FROM ${this.books} WHERE 1 `;
    //     if (bookname) {
    //         sql += `and bookname like "%${bookname}%"`;
    //     }
    //     this.mydb.query(sql, (err, results) => {
    //         if (err) {
    //             callback(err);
    //         } else {
    //             callback(results);
    //         }
    //         this.mydb.end();
    //     })
    // }


    // getAllGoods(callback) {
    //     let sql = `SELECT * FROM ${this.goodstable}`;
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



    //     addgoodscate(cateinfo, callback) {
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
    //         let sql = `INSERT INTO ${this.table}(${fieldstr}) VALUES (${field})`;
    //         this.mydb.query(sql, data, (err, results) => {
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

    //     delGoodsCate(cid, callback) {
    //         let sql = `DELETE FROM ${this.table} WHERE cid = ${cid}`;
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



    //     getGoodsCateByCid(cid, callback) {
    //         let sql = `SELECT * FROM ${this.table} WHERE cid = ${cid}`;
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



}

module.exports = CateModel;