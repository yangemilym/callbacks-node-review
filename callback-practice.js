var request = require('request');

var getSingleUsername = function(userId, callback) {
  request('https://jsonplaceholder.typicode.com/users/' + userId, function(err, response, body) {
    if (err) {
      callback(err, null);
      return;
    }

    var username = JSON.parse(body).username;
    callback(null, username);
  });
};

var getUsernames = function(userIds, callback) {
  // YOUR CODE HERE
};

// usage of getUsernames:
getUsernames([1, 2, 3], function(users) {
  var user1 = users[0];
  var user2 = users[1];
  var user3 = users[2];

  // do something with usernames here.
})
