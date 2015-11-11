module.exports = function(MProduct) {
	MProduct.createProduct =  function(id,product_name,detail,cb){
		MProduct.create({ID:id, 
					  	NAME:product_name, 
					  	DETAIL:detail,
					  	UPDATE_DATE:Date.now(),
					  	REGDT_DATE:Date.now(),
					  	IS_DELETE:'0'},cb);
	};
	MProduct.remoteMethod (
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
