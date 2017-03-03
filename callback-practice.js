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


//userIds= array of ids [1,2,3,4,5]
var getUsernames = function(userIds, callback) {
  var counter = 0;
  var totalPeople = [];
  // YOUR CODE HERE
  userIds.forEach(function(element){
    getSingleUsername(element, function(err, username){
      if (err){
        console.log("this is an error")
        callback(err, null)
        return;
      }

      totalPeople.push(username)
      counter++
      // console.log(totalPeople, "totalpeople")
      if(counter === userIds.length){
        console.log(totalPeople, "total people array")
        callback(null, totalPeople)
      }
    })
  })
};


// module.exports = getUsernames;
module.exports = {
  getSingleUsername : getSingleUsername,
  getUsernames: getUsernames
}

// // usage of getUsernames:
// getUsernames([1, 2, 3,4 ,5], function(err, users) {
//   // var user1 = users[0];
//   var user2 = users[1];
//   var user3 = users[2];
//   var user4 = users[3];
//   var user5= users[4];
//   var users6 = users[5]      

// console.log(users)
  // do something with usernames here.
// })
