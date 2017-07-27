/**
 * Created by limuzi on 2017/7/18.
 */
const route = (handle, pathname) => {
  console.log('About a route a request for' + pathname)
  console.log()
  if (typeof handle[pathname] === 'function') {
    console.log('1' + handle[pathname]())
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname)
  }
}

exports.route = route
