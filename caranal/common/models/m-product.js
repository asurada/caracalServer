module.exports = function(MProduct) {
	MProduct.getName = function(id, cb) {
		YwUser.findById(id, function (err, instance) {
        response = "user name is " + instance.name;
        cb(null, response);
        console.log(response);
    	});
	};


	MProduct.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'answer', type: 'string'}
        }
  );

};
