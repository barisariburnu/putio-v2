var request = require('request');

var Account = function(oauth_token, api){

	/* 
	Info (GET)
		- Information about user account. subtitle_languages is a list of ISO639-2 codes
	*/
	function info(parameters, callback){
		request(api + 'account/info', {
	        method:'GET',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.info);
	    });
	}


	/*
	Settings (GET)
		- User preferences
	*/
	function settings(parameters, callback){
		request(api + 'account/settings', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.settings);
	   		});
	}


	/* 
	Send Request (POST)
		- Updates user preferences. Only sent parameters are updated

	Parameters
		- default_download_folder: Optional. File ID for default location. 0 is the root folder
		- extraction_default: Optional. Boolean value (true or false). Enables auto-extraction of compressed and archieved files
		- is_invisible: Optional. Boolean value (true or false). Enables invisible mode
		- subtitle_languages: Optional. String of comma separated ISO639-2 codes (e.g., ‘eng,tr’). Maximum length of choices is 2
	*/
	function update(parameters, callback){
		request(api + 'account/settings', {
	        method:'POST',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        },
    		formData: {
    			"default_download_folder": parameters.default_download_folder ? parameters.default_download_folder : '0',
				"extraction_default": parameters.extraction_default ? parameters.extraction_default : 'True',
				"is_invisible": parameters.is_invisible ? parameters.is_invisible : 'True',
				"subtitle_languages": parameters.subtitle_languages ? parameters.subtitle_languages : 'eng'
    		}
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.response);
	    });
	}

	return {
		info: info,
		settings: settings,
		update: update
	}
}

module.exports = Account;