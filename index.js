const httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "http://20.54.124.163:3001",
    ws: true
  })
  .listen(3331);