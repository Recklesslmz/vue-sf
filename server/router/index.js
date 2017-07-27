/**
 * Created by limuzi on 2017/7/13.
 */

const server = require('./server')
const router = require('./router')
const requestHandlers = require('./requestHandlers')

let handle = []

handle["/"] = requestHandlers.start
handle["/start"] = requestHandlers.start
handle["/upload"] = requestHandlers.upload

server.start(router.route,handle)
