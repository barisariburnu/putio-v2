var request = require('request');

var Friends = function(oauth_token, api){

	/* 
	List (GET)
		- Lists friends
	*/
	function list(parameters, callback){
		request(api + 'friends/list', {
	        method:'GET',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.friends);
	    });
	}


	/*
	Friend Requests (GET)
		- Lists incoming friend requests
	*/
	function friendRequests(parameters, callback){
		request(api + 'friends/waiting-requests', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.friends);
	   		});
	}


	/* 
	Send Request (POST)
		- Sends a friend request to the given username

	Parameters
		- username: Want to be friend
	*/
	function sendRequest(parameters, callback){
		request(api + 'friends/' + parameters.username + '/request', {
	        method:'POST',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body);
	    });
	}


	/* 
	Approve (POST)
		- Approves a friend request from the given username

	Parameters
		- username: Want to be friend
	*/
	function approve(parameters, callback){
		request(api + 'friends/' + parameters.username + '/approve', {
	        method:'POST',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body);
	    });
	}
	

	/* 
	Deny (POST)
		- Denies a friend request from the given username

	Parameters
		- username: Want to denies a friend
	*/
	function deny(parameters, callback){
		request(api + 'friends/' + parameters.username + '/deny', {
	        method:'POST',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body);
	    });
	}


	/* 
	Unfriend (POST)
		- Removes friend from friend list. Files shared with all friends will be automatically removed from old friend’s directory

	Parameters
		- username: Want to removes friend from friend list
	*/
	function unfriend(parameters, callback){
		request(api + 'friends/' + parameters.username + '/unfriend', {
	        method:'POST',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body);
	    });
	}

	return {
		list: list,
		friendRequests: friendRequests,
		sendRequest: sendRequest,
		approve: approve,
		deny: deny,
		unfriend: unfriend
	}
}

module.exports = Friends;