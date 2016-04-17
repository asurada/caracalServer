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



    MProduct.deleteProductById =  function(id,cb){
		MProduct.destroyById(id,cb);
	};
	MProduct.remoteMethod (
        'deleteProductById',
        {
          http: {path: '/deleteProductById', verb: 'post'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' }},
          returns: {arg: 'answer', type: 'string'}
        }
    );


	//削除
    MProduct.deleteProductByName =  function(name,cb){
		MProduct.destroyAll({NAME: name},cb
		);
	};
	MProduct.remoteMethod (
        'deleteProductByName',
        {
          http: {path: '/deleteProductByName', verb: 'post'},
          accepts: {arg: 'name', type: 'string', http: { source: 'query' }},
          returns: {arg: 'answer', type: 'string'}
        }
    );


    //検索		
    MProduct.findProductByName =  function(name,cb){
		MProduct.find({where: {name: name}}, 
			cb
		);
	};
	MProduct.remoteMethod (
        'findProductByName',
        {
          http: {path: '/findProductByName', verb: 'post'},
          accepts: {arg: 'name', type: 'string', http: { source: 'query' }},
          returns: {arg: 'answer', type: 'string'}
        }
    );



    MProduct.updateProductNameById =  function(id,name,cb){
		MProduct.updateAll({ID: id},{NAME:name}, 
			cb
		);
	};
	MProduct.remoteMethod (
        'updateProductNameById',
        {
          http: {path: '/updateProductNameById', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' }},
          			{arg: 'name', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );

};
