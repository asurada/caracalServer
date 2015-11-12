module.exports = function(Mshop) {
	Mshop.createShop =  function(id,shop_name,cb){
		Mshop.create({ID:id, 
					  SHOP_NAME:shop_name, 
					  UPDATE_DATE:Date.now(),
					  REGDT_DATE:Date.now(),
					  IS_DELETE:'0'},cb);
	};
	Mshop.remoteMethod(
        'createShop',
        {
          http: {path: '/createShop', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' } },
          			{arg: 'shop_name', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );
};
