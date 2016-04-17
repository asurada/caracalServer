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


    TReview.findReviewById =  function(review_id,cb){
			TReview.find({where:{REVIEW_ID:review_id}}, 
					  		cb);
	};
	TReview.remoteMethod (
        'findReviewById',
        {
          http: {path: '/findReviewById', verb: 'post'},
          accepts: {arg: 'review_id', type: 'number', http: { source: 'query' }},
          returns: {arg: 'answer', type: 'string'}
        }
    );


    TReview.findReviewByUserId =  function(user_id,cb){
			TReview.find({where:{USER_ID:user_id}}, 
					  		cb);
	};
	TReview.remoteMethod (
        'findReviewByUserId',
        {
          http: {path: '/findReviewByUserId', verb: 'post'},
          accepts: {arg: 'user_id', type: 'number', http: { source: 'query' }},
          returns: {arg: 'answer', type: 'string'}
        }
    );


    TReview.deleteReviewById =  function(review_id,cb){
			TReview.destroyAll({REVIEW_ID:review_id}, 
					  		cb);
	};
	TReview.remoteMethod (
        'deleteReviewById',
        {
          http: {path: '/deleteReviewById', verb: 'post'},
          accepts: {arg: 'review_id', type: 'number', http: { source: 'query' }},
          returns: {arg: 'answer', type: 'string'}
        }
    );

     TReview.updateReviewById =  function(review_id,review,cb){
			TReview.updateAll({REVIEW_ID:review_id}, {REVIEW:review},
					  		cb);
	};
	TReview.remoteMethod (
        'updateReviewById',
        {
          http: {path: '/updateReviewById', verb: 'post'},
          accepts: [{arg: 'review_id', type: 'number', http: { source: 'query' }},
          			{arg: 'review', type: 'string', http: { source: 'query' }}],
          returns: {arg: 'answer', type: 'string'}
        }
    );

  
};
