var files = require('./lib/files.js');
var transfers = require('./lib/transfers.js');
var friends = require('./lib/friends.js');
var account = require('./lib/account.js');

var Putio = function(token){
	var api = 'https://api.put.io/v2/';
	
	return {
		files: files(token, api),
		transfers: transfers(token, api),
		friends: friends(token, api),
		account: account(token, api)
	}
}

module.exports = Putio;