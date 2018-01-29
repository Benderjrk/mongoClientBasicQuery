var MongoClient = require('mongdb').MongoClient,
    assert = require('assert');

MongoClient.connect('database///specificdatabse', function(err, db) {
    assert.equal(err, null);
    console.log(`Successfully connected to ${db}`);
// this gets the query ready
    var query = {"someBsonData": "someBsonData"};
    // this will make a projection to show the things from the database I want to show
    var projection = {"name":1, "code":1,"_id":0};
// this will get the collection but not execute it like an array it will execute in a stream
    var cursor = db.collection('companies').find(query);
    //add the projection to the cursor
    cursor.project(projection);

    cursor.forEach(
      function(doc) {
        //do something with doc
      },
      function(err) {
        assert.equal(err, null);
        return db.close();
      }


    );



});
