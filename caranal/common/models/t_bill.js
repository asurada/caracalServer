module.exports = function(TBill) {


	TBill.createBill =  function(bill_id,product_id,user_id,num,detail,cb){
			TBill.create({ID:bill_id, 
					  		PRODUCT_ID:product_id, 
					  		USER_ID:user_id,
					  		NUM:num,
					  		DETAIL:detail,
					  		REGDT_DATE:Date.now(),
					  		UPDATE_DATE:Date.now(),
					  	    IS_DELETE:'0'},cb);
	};
	TBill.remoteMethod (
        'createBill',
        {
          http: {path: '/createBill', verb: 'post'},
          accepts: [{arg: 'bill_id', type: 'number', http: { source: 'query' }},
                    {arg: 'product_id', type: 'number', http: { source: 'query' }},
          			{arg: 'user_id', type: 'number', http: { source: 'query' }},
          			{arg: 'num', type: 'number', http: { source: 'query' }},
          			{arg: 'detail', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );
};
