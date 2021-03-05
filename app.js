//1.引包
const express = require('express')
const app = express()
//路由单放一个文件中
const router = require('./router')
//解析post请求体bodyparser
const bodyParser = require('body-parser')
//登录的时候用到的中间件
const expressSession=require('express-session')
const orm=require('orm');
app.use(orm.express('mysql://root:@127.0.0.1:3306/classification',{
    define:function(db,models,next){
        next();
    }
}));

//使用express-session 中间件
app.use(expressSession({
	//cookie的名字
    name : "mazg", 
    //cookie签名的信息
    secret : 'secret',
    //cookie的有效时间 3分钟
    cookie : {
        maxAge : 1000 * 60 * 3, 
    },
    //即使session的信息没有变化，也会重新保存session
    resave : false,
    //如果saveUninitialized为true，他会将没有初始化的session的数据保存到storage中
    saveUninitialized: false,
    //主要作用：每次请求都重置cookie过期时间
    rolling: true,
    //指定session数据存储的地方(数据库),默认情况下session会话数据是保存在服务器的内存中
    store:null
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//将路由挂载到实例上
app.use('/api', router)
//监听端口
app.listen(7315, function () {
    console.log('7315端口已启动!')
})