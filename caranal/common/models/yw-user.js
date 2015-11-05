module.exports = function(YwUser) {
 	//select one
  YwUser.getName = function(id, cb) {
		YwUser.findById(id, function (err, instance) {
        response = "user name is " + instance.name;
        cb(null, response);
        console.log(response);
    	});
	};


	YwUser.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'answer', type: 'string'}
        }
  );


　YwUser.getIdByName = function(id,cb) {
    YwUser.find({where: { "id" :{gt : id} },fields :{ name : true}}, function (err, instance) {
        instance.forEach(function(data) {
          console.log(data.name);
          if(data.name == 'name2'){
            data.name = 2;
          }

        });
        response =  instance;
        console.log(response);
        cb(null, response);
      });
  };

  YwUser.remoteMethod (
     'getIdByName',
      {
         http: {path: '/getIdByName', verb: 'get'},
         accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
         returns: {arg: 'answer', type: 'string'}
      }
  );

 //select array
  YwUser.getAll = function(cb) {
		  YwUser.find(function (err, instance) {
        response =  instance;
        console.log(response);
        cb(null, response);
      });
	};


	YwUser.remoteMethod (
        'getAll',
        {
          http: {path: '/getAll', verb: 'get'},
          returns: {arg: 'answer', type: 'string'}
        }
    );


  //insert
  YwUser.insert = function(did,dname,cb) {
     console.log(did +':'+ dname);
     YwUser.create({id: did, name: dname ,regdt:Date.now()},cb);
  };

  YwUser.remoteMethod (
        'insert',
        {
          http: {path: '/insert', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' } },
                    {arg: 'name', type: 'string', http: { source: 'query' } }],
          returns: {arg: 'answer', type: 'string'}
        }
    );


//update
 YwUser.updateYw = function(did,dname,cb) {
      YwUser.find({where: { "id" : {gt: did}}}, function(err, instance){
        instance.forEach(function(data){
          data.updateAttributes({name: dname}, function(err, instance) {
             if (err) return (err);
             console.log(instance);
          });
        });
        cb(null, "success");
      });
  };
  YwUser.remoteMethod(
    'updateYw',
    {
      http: {path: '/updateYw', verb: 'post'},
      accepts: [{arg: 'did', type: 'number', http: { source: 'query' } },
                {arg: 'dname', type: 'string', http: { source: 'query' } }],
      returns: {arg: 'answer', type: 'string'}
    }
  );
//delete
 YwUser.deleteYw = function(id,cb) {
    YwUser.destroyById(id,function(err,info){
        if(err) return(err);
        console.log(info);
    });
    cb(null,"success");
 };

  YwUser.remoteMethod(
    'deleteYw',
    {
      http: {path: '/deleteYw', verb: 'post'},
      accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
      returns: {arg: 'answer', type: 'string'}
    }
  );


};
