var loopback = require('loopback');
var boot = require('loopback-boot');
var message = require('../common/logic/messageLogic');
var app = module.exports = loopback();

exports.req_ip = function(req) {
        return ( req.headers["X-Forwarded-For"]
                                        || req.headers["x-forwarded-for"]
                                        || req.client.remoteAddress );
}

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

    //var connectionPool = new Array();
    var clients = {};
    var socketId;
    app.io.on('connection', function(socket){
       
       socketId = socket.id;
       var clientIp = socket.request.connection.remoteAddress;
       console.log('【connected】:new conenction added '+clientIp + ' socketId '+ socketId);
       clients[socketId] = socket;
       clients[socketId].emit('chat', 'for your eyes only');


       socket.on('chat', function(msg){
          console.log('message: ' + msg);
          var currentdate = new Date();
          message(app,msg);
          //app.io.emit('chat', '【'+currentdate+'】:'+msg);
          //app.io.emit('chat', msg);
      });


      var ready = 0;
      socket.on('state', function(msg){
         console.log("preready");
          JSON.parse(msg, function(k, v) {
          if (k === "method" && v ==="ready") {
            ready++;
            console.log("ready");
            if(ready == 2){
               console.log("go");
               var myObject = {
                 jsonrpc : 2.0,
                 method : "start",
                 params : ""
               }
               app.io.emit('state', myObject); 
            }
          } 
          return '';              
      });
      
      });

        
     
      socket.on('JSON', function(msg){
        console.log('JSON:' + msg);
        var method;
        var params;
        var x;
        var y;
        var r;
        JSON.parse(msg, function(k, v) {
          if (k === "method") {
              console.log(v);
              method = v ; 
              return;
          }
          if(k === "params"){
              params = v;
             return;
          } 
          if(k === "x"){
             x = v;
             return;
         } 
         if(k === "y"){
              y = v;
              return;
          } 
          if(k === "r"){
              r = v;
              return;
           } 
          return '';              
      });


      var currentdate = new Date();
     // message(app,msg.value);
      var myObject = {
         jsonrpc : 2.0,
         method : method,
         params : [{x:x,y:y,r:r}]
      }

      //app.io.emit('chat', '【'+currentdate+'】:'+msg);
      app.io.emit('JSON', myObject);
    });

    socket.on('disconnect', function(){
        
        console.log('user disconnected');
    });

    app.io.sockets.emit('chat', "接続完了");

  });
});

