const httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "http://40.127.216.33:3001",
    ws: true
  })
  .listen(3331);