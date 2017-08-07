/**
 * Created by limuzi on 2017/7/13.
 */
var express = require('express')
var router = express.Router()
var fs = require('fs')

// var PATH = './public/data/'

router.post('/login', function (req, res, next) {
  //用户名密码
  var username = req.body.username
  var password = req.body.password

  if (username === 'lmz' && password === '123456') {
    res.cookie('user', username)
    return res.send({
      status: 1
    })
  }

  return res.send({
    status: 0,
    info: '登录失败'
  })

})

module.exports = router;
