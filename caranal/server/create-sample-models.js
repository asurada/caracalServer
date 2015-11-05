var async = require('async');
module.exports = function(app) {
  //data sources;
  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  // async.parallel({
  //   //reviewers : async.apply(createTesters),
  //   //yw_user : async.apply(createTywDb)
  // }, function(err, results) {
  //   if (err) throw err;
  //     console.log('> insert err');
  // });
  //create reviewers
  function createTesters(cb) {
    mysqlDs.automigrate('testdb_1234', function(err) {
      if (err) 
        return cb(err);

      // var testdb_1234 = app.models.testdb_1234;
      // testdb_1234.upsert([
      //   {id: '101', other: 'name101'},
      //   {id: '201', other: 'name201'},
      //   {id: '301', other: 'name301'},
      //   {id: '401', other: 'name401'},
      //   {id: '501', other: 'name501'},
      //   {id: '601', other: 'name601'},
      //   {id: '701', other: 'name701'},
      //   {id: '801', other: 'name801'},
      //   {id: '901', other: 'name901'},
      // ], cb);
    });
  }


   function createTywDb(cb) {
    mysqlDs.automigrate('yw_user', function(err) {
      if (err) 
        return cb(err);

      var yw_user = app.models.yw_user;
    
      // yw_user.upsert([
      //   {id: '1', name: 'name1' , regdt : Date.now() },
      //   {id: '2', name: 'name2' , regdt : Date.now() },
      //   {id: '3', name: 'name3' , regdt : Date.now() },
      //   {id: '4', name: 'name4' , regdt : Date.now() },
      //   {id: '5', name: 'name5' , regdt : Date.now() },
      // ], cb);

    });
  }


  
  //create reviews
  // function createReviews(reviewers, coffeeShops, cb) {
  //   mongoDs.automigrate('Review', function(err) {
  //     if (err) return cb(err);
  //     var Review = app.models.Review;
  //     var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
  //     Review.create([
  //       {
  //         date: Date.now() - (DAY_IN_MILLISECONDS * 4),
  //         rating: 5,
  //         comments: 'A very good coffee shop.',
  //         publisherId: reviewers[0].id,
  //         coffeeShopId: coffeeShops[0].id,
  //       },
  //       {
  //         date: Date.now() - (DAY_IN_MILLISECONDS * 3),
  //         rating: 5,
  //         comments: 'Quite pleasant.',
  //         publisherId: reviewers[1].id,
  //         coffeeShopId: coffeeShops[0].id,
  //       },
  //       {
  //         date: Date.now() - (DAY_IN_MILLISECONDS * 2),
  //         rating: 4,
  //         comments: 'It was ok.',
  //         publisherId: reviewers[1].id,
  //         coffeeShopId: coffeeShops[1].id,
  //       },
  //       {
  //         date: Date.now() - (DAY_IN_MILLISECONDS),
  //         rating: 4,
  //         comments: 'I go here everyday.',
  //         publisherId: reviewers[2].id,
  //         coffeeShopId: coffeeShops[2].id,
  //       }
  //     ], cb);
  //   });
  // }
};