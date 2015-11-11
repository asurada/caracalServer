module.exports = function(MImages) {
	MImages.createImage =  function(id,image_type,image,image_size,image_ctgy,image_name,cb){
		MImages.create({IMAGE_ID:id, 
					  	IMAGE_TYPE:image_type, 
					  	IMAGE:image,
					  	IMAGE_SIZE:image_size,
					  	IMAGE_CTGY:image_ctgy,
					  	IMAGE_NAME:image_name,
					    IMAGE_REGDT_DATE:Date.now(),
					    IMAGE_UPDATE_DATE:Date.now(),
					    IMAGE_IS_DELETE:'0'},cb);
	};
	MImages.remoteMethod (
        'createImage',
        {
          http: {path: '/createImage', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' } },
          			{arg: 'image_type', type: 'string', http: { source: 'query'}},
          			{arg: 'image', type: 'string', http: { source: 'query' } },
          			{arg: 'image_size', type: 'string', http: { source: 'query' } },
          			{arg: 'image_ctgy', type: 'string', http: { source: 'query' } },
          			{arg: 'image_name', type: 'string', http: { source: 'query' } }],
          returns: {arg: 'answer', type: 'string'}
        }
    );
};
