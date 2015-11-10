module.exports = function(Mproduct) {
	Mproduct.createProduct =  function(id,product_name,detail,cb) 
		Mproduct.create({ID:id, 
					  NAME:product_name, 
					  DETAIL:detail,
					  UPDATE_DATE:Date.now(),
					  REGDT_DATE:Date.now(),
					  IS_DELETE:'0'},cb);
	};
	

	Mproduct.remoteMethod (
        'createProduct',
        {
          http: {path: '/createProduct', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' } },
          			{arg: 'product_name', type: 'string', http: { source: 'query' } },
          			{arg: 'detail', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );
};
