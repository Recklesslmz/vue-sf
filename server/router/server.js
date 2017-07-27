const http = require('http')
const url = require('url')
const start = (route, handle) => {
  const onRequest = (req, res) => {
    console.log('Request received')
    const pathname = url.parse(req.url).pathname
    console.log("===" + pathname)
    route(handle, pathname)
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write("Hello NodeJs")
    res.end()
  }
  http.createServer(onRequest).listen(8888)
  console.log("服务启动")
}


exports.start = start
