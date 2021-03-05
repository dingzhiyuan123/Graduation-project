var express = require('express');
var router = express.Router();
// 获取资讯列表
router.get('/zixun', function (req, res) {
    let sql = "SELECT * FROM zixun"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 获取省市区信息
router.get('/city', function (req, res) {
    let sql = "SELECT * FROM city"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 获取当前用户信息
router.get('/person', function (req, res) {
    let sql = "SELECT * FROM loginperson"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 存储省市区
router.post('/city', function (req, res) {
    var sheng=req.body.sheng;
    var shi=req.body.shi;
    var qv=req.body.qv;
    console.log(sheng,shi,qv,'走了')
    let sql = `UPDATE city SET sheng='${sheng}',shi='${shi}',qv='${qv}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 存储订单信息
router.post('/dingdan', function (req, res) {
    let sql = `INSERT INTO dingdan VALUES('${req.body.message}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 获取订单信息
router.get('/getdingdan', function (req, res) {
    let sql = "SELECT * FROM dingdan"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 修改信息
router.post('/updateuser', function (req, res) {
    let sql = `UPDATE users SET user_gender='${req.body.gender1}',user_age='${req.body.age1}',user_qianming='${req.body.qianming1}',user_hobbit='${req.body.aihao1}' WHERE user_name='${req.body.name1}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 存储当前登录者信息
router.post('/loginperson', function (req, res) {
    var name=req.body.user_name;
    let sql = `UPDATE loginperson SET user_name='${name}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 获取到购物车的所有商品
router.get('/addcarsget', function (req, res) {
    let sql = "SELECT * FROM addcarss"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 获取到所有用户信息
router.get('/getusers', function (req, res) {
    let sql = "SELECT * FROM users"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 将商品添加到购物车中
router.post('/addcarss', function (req, res) {
    var img=req.body.goods_img;
    var title=req.body.goods_title;
    var lineprice=req.body.goods_marketprice;
    var price = req.body.goods_price;
    var num=req.body.goods_num;
    var id =req.body.goods_id;
    let sql = `INSERT INTO addcarss VALUES('${img}','${title}','${lineprice}','${price}','${num}',${id})`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 将用户留言存入数据库中
router.post('/liuyan', function (req, res) {
    let sql = `INSERT INTO liuyan VALUES('${req.body.name}','${req.body.tel}','${req.body.msg}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 新增注册用户
router.post('/addnewusers', function (req, res) {
    var name=req.body.name;
    var password=req.body.password;
    var gender=req.body.gender;
    var age = req.body.age;
    var qianming=req.body.qianming;
    var hobbit =req.body.hobbit;
    var wenti =req.body.wenti;
    var daan =req.body.daan;
    let sql = `INSERT INTO users VALUES('${name}','${password}','${gender}','${age}','${qianming}','${hobbit}','${wenti}','${daan}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 商品数量+1
router.post('/add1', function (req, res) {
    var title=req.body.goods_title;
    let sql = `UPDATE addcarss  set goods_num=goods_num+1 WHERE goods_title='${title}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 商品数量-1
router.post('/add2', function (req, res) {
    var img=req.body.goods_img;
    let sql = `UPDATE addcarss  set goods_num=goods_num-1 WHERE goods_img='${img}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
//直接更改商品数量
router.post('/add00', function (req, res) {
    var id=req.body.goods_id;
    var num=req.body.goods_num;
    let sql = `UPDATE addcarss  set goods_num=${num} WHERE goods_id='${id}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 删除购物车指定商品
router.post('/add3', function (req, res) {
    var id=req.body.goods_id;
    let sql = `DELETE FROM addcarss WHERE goods_id='${id}'`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 鲜花介绍
router.get('/details', function (req, res) {
    let sql = "SELECT * FROM details"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
// 清空购物车
router.get('/alldel', function (req, res) {
    let sql = "DELETE FROM addcarss"
    req.db.driver.execQuery(sql, (err, datas) => {
        res.end(JSON.stringify(datas))
        return false
    })
})
module.exports = router;
