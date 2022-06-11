import core from 'x-core'
import http from 'http'

function log () {
  console.log("i am the x-cli package")
  console.log("i reference the x-core package: ", core())
  console.log("i am change!")
}

log()
export default log

http.createServer((req, res) => {
  res.end("hello, x-core!, like")
}).listen(3000)