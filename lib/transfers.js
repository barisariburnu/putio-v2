var request = require('request');

var Transfers = function(oauth_token, api){

	/* 
	List (GET)
		- Lists active transfers. If transfer is completed, it is removed from the list
	*/
	function list(parameters, callback){
		request(api + 'transfers/list', {
	        method:'GET',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.transfers);
	    });
	}


	/*
	Add (POST)
		- Adds a new transfer

	Parameters
		- url: Location of the file to be downloaded
		- save_parent_id: Save location of the transfer. This defaults to 0 (which means root)
		- extract: Extract after download? (default=False)
	*/
	function add(parameters, callback){
		request(api + 'transfers/add', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
	    			"url": parameters.url,
					"extract": parameters.extract ? parameters.extract : 'False',
					"save_parent_id": parameters.save_parent_id ? parameters.save_parent_id : '0'
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/* 
	Get (GET)
		- Returns a transfer’s properties
	*/
	function getTransfer(parameters, callback){
		request(api + 'transfers/' + parameters.id, {
	        method:'GET',
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
	Retry (POST)
		- Retry previously failed transfer

	Parameters
		- id: ID of the failed download
	*/
	function retry(parameters, callback){
		request(api + 'transfers/add', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
	    			"id": parameters.id
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Cancel (POST)
		- Deletes the given transfers

	Parameters
		- transfer_ids: Transfer ids separated by commas. Ex: 1,2,3,4
	*/
	function cancel(parameters, callback){
		request(api + 'transfers/add', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
	    			"transfer_ids": parameters.transfer_ids
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Clean (POST)
		- Clean completed transfers from the list
	*/
	function clean(parameters, callback){
		request(api + 'transfers/add', {
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
		add: add,
		getTransfer: getTransfer,
		retry: retry,
		cancel: cancel,
		clean: clean
	}
}

module.exports = Transfers;