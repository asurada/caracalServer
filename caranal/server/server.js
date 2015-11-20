var loopback = require('loopback');
var boot = require('loopback-boot');
var message = require('../common/logic/messageLogic');
var app = module.exports = loopback();


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
  // start the server if `$ node server.js`
  if (require.main === module)
  //  app.start();
    console.log('socket start');
    app.io = require('socket.io')(app.start());
    app.io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat', function(msg){
      console.log('message: ' + msg);
      var currentdate = new Date();
      message(app,msg);
      //app.io.emit('chat', '【'+currentdate+'】:'+msg);
      app.io.emit('chat', msg);
    });

    socket.on('JSON', function(msg){
      console.log('JSON:' + msg.value);
      var currentdate = new Date();
      message(app,msg.value);
      //app.io.emit('chat', '【'+currentdate+'】:'+msg);
      app.io.emit('JSON', msg);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    app.io.sockets.emit('chat', "接続完了");
  });
});

