/**
 * Created by limuzi on 2017/7/27.
 */
const start = () => {
  console.log("Request handler start")

  return "Hello Start"
}

const upload = () => {
  console.log('Request handler upload')

  return "Hello Upload"
}


exports.start = start

exports.upload = upload
