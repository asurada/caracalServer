module.exports = function(Muser) {
	Muser.createUser = function(id,user_name,address,birthday,sex,phone,level,cb) {
		Muser.create({ID:id, 
					  USER_NAME:user_name, 
					  ADDRESS:address,
					  BIRTHDAY:birthday,
					  SEX:sex,
					  PHONE:phone,
					  LEVEL:level,
					  UPDATE_DATE:Date.now(),
					  REGDT_DATE:Date.now(),
					  IS_DELETE:'0'},cb);
	};
	
	Muser.remoteMethod (
        'createUser',
        {
          http: {path: '/createUser', verb: 'post'},
          accepts: [{arg: 'id', type: 'number', http: { source: 'query' } },
          			{arg: 'user_name', type: 'string', http: { source: 'query' } },
          			{arg: 'address', type: 'string', http: { source: 'query' } },
          			{arg: 'birthday', type: 'date', http: { source: 'query' } },
		  			{arg: 'sex', type: 'number', http: { source: 'query' } },
          			{arg: 'phone', type: 'string', http: { source: 'query' } },
                    {arg: 'level', type: 'number', http: { source: 'query' } }],
          returns: {arg: 'answer', type: 'string'}
        }
    );


};
