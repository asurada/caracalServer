module.exports = function(MProduct) {
	MProduct.insertProduct = function(name,detail,price,cb) {
		console.log(name +';'+ detail+';'+price);
     	MProduct.create({name: name ,detail:detail,price:price ,regdt:Date.now(),updt:Date.now()},cb);
	};

	MProduct.remoteMethod(
        'insertProduct',
        {
          http: {path: '/insertProduct', verb: 'post'},
          accepts: [{arg: 'name', type: 'String', http: { source: 'query' } },
                    {arg: 'detail', type: 'String', http: { source: 'query' }},
                    {arg: 'price', type: 'Number', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );




};
