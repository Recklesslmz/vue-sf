/**
 * Created by limuzi on 2017/7/13.
 */

const server = require('./server')
const router = require('./router')

server.start(router.route)
