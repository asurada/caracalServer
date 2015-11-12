module.exports = function(MProductUser){
	MProductUser.createProductUser =  function(id,product_name,detail,cb){
		MProductUser.create({ID:id, 
					  	NAME:product_name, 
					  	DETAIL:detail,
					  	UPDATE_DATE:Date.now(),
					  	REGDT_DATE:Date.now(),
					  	IS_DELETE:'0'},cb);
	};
	MProductUser.remoteMethod (
        'createProductUser',
        {
          http: {path: '/createProductUser', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' } },
          			{arg: 'product_name', type: 'string', http: { source: 'query' } },
          			{arg: 'detail', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );
};
