module.exports = function(TReview) {
	TReview.createReview =  function(review_id,user_id,product_id,review,cb){
			TReview.create({REVIEW_ID:review_id, 
					  		PRODUCT_ID:user_id, 
					  		USER_ID:product_id,
					  		REVIEW:review,
					  		REGDT_DATE:Date.now(),
					  		UPDATE_DATE:Date.now(),
					  	    IS_DELETE:'0'},cb);
	};
	TReview.remoteMethod (
        'createReview',
        {
          http: {path: '/createReview', verb: 'post'},
          accepts: [{arg: 'review_id', type: 'number', http: { source: 'query' }},
          			{arg: 'user_id', type: 'number', http: { source: 'query' }},
          			{arg: 'product_id', type: 'number', http: { source: 'query' }},
          			{arg: 'review', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );
};
