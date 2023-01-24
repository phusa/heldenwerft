module.exports = {
  apps : [
    {
      name   : "cms",
      script : "server.js",
      watch : "./build",
      watch_delay : 1000,
      ignore_watch : ["./public/uploads"]
    }
  ]
}
