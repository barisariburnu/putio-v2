var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

// Example list:
Putio.friends.list(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example friendRequests:
Putio.friends.friendRequests(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example sendRequest:
Putio.friends.sendRequest({username: 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example approve:
Putio.friends.approve({username: 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example deny:
Putio.friends.deny({username: 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example unfriend:
Putio.friends.unfriend({username: 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});