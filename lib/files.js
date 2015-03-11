var request = require('request');

var Files = function(oauth_token, api){

	/* 
	List (GET)
		- Lists files in a folder

	Parameters
		- parent_id: ID of the folder you’d like to list. This defaults to the root directory (which has ID number 0)
	*/
	function list(parameters, callback){
		request(api + 'files/list', {
	        method:'GET',
	        json: true,
	        qs: {
	            oauth_token: oauth_token,
	            parent_id: parameters.parent_id ? parameters.parent_id : 0
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.files);
	    });
	}


	/*
	Search (GET)
		- Searches your (and shared) files. Returns 50 results at a time. The url for next 50 results is given in the “next” paramater

	Parameters
		- query: The keyword to search
		- page:	Optional. Defaults to 1. If -1 given, returns all results at a time
	*/
	function search(parameters, callback){
		request(api + 'files/search/' + parameters.query + '/page/' + (parameters.page ? parameters.page : '1'), {
	        method:'GET',
	        json: true,
	        qs: {
	            oauth_token: oauth_token
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.files);
	    });
	}


	/*
	Upload (POST)
		- Uploads a file. If the uploaded file is a torrent file, starts it as a transfer. This endpoint must be used with upload.put.io domain

	Parameters
		- url:	Magnet url.
		- parent_id: Location of the uploaded file. This defaults to 0 (which means root)
	*/
	function uploadFromURL(parameters, callback){
		request(api + 'transfers/add-multi', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
	    			urls: JSON.stringify([{
	    				"url": parameters.url,
	    				"email_when_complete": false,
	    				"extract": true,
	    				"save_parent_id": parameters.parent_id ? parameters.parent_id : 0
	    			}])
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.transfers[0].transfer);
	   		});
	}


	/*
	Create Folder (POST)
		- Create Folder

	Parameters
		- name:	Name of the new folder
		- parent_id: Location of the new folder
	*/
	function createFolder(parameters, callback){
		request(api + 'files/create-folder', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
					"name": parameters.name,
					"parent_id": parameters.parent_id ? parameters.parent_id : 0
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	GET (GET)
		- Returns a file’s properties

	Parameters
		- parent_id: ID of the folder you’d like to list. This defaults to the root directory (which has ID number 0)
	*/
	function getFile(parameters, callback){
		request(api + 'files/' + parameters.id, {
	        method:'GET',
	        json: true,
	        qs: {
	            oauth_token: oauth_token,
	            parent_id: parameters.parent_id ? parameters.parent_id : 0
	        }
	    }, function(err, res, body){
	        if(err){ return callback(err); }

	        callback(null, body.file);
	    });
	}


	/*
	Delete (POST)
		- Deletes given files

	Parameters
		- file_ids:	File ids separated by commas. Ex: 1,2,3,4
	*/
	function deleteFile(parameters, callback){
		request(api + 'files/delete', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
					"file_ids": parameters.file_ids
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Rename (POST)
		- Renames given file

	Parameters
		- file_id:	ID of the file to be renamed
		- name:	Name of the new file
	*/
	function renameFile(parameters, callback){
		request(api + 'files/rename', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
					"file_id": parameters.file_id,
					"name": parameters.name
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Move (POST)
		- Moves files to the given destination

	Parameters
		- file_ids:	File ids separated by commas. Ex: 1,2,3,4
		- parent_id: Location of the destination folder
	*/
	function moveFile(parameters, callback){
		request(api + 'files/move', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
					"file_ids": parameters.file_ids,
					"parent_id": parameters.parent_id
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Convert to MP4 (POST)
		- Starts the conversion of the given file to mp4

	Parameters
		- id: ID of the files to be converted
	*/
	function convertToMP4(parameters, callback){
		request(api + 'files/' + parameters.id + '/mp4', {
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
	Get MP4 Status (GET)
		- Returns the status of mp4 conversion of the given file

	Parameters
		- id: ID of the files to be converted
	*/
	function getMP4Status(parameters, callback){
		request(api + 'files/' + parameters.id + '/mp4', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.mp4);
	   		});
	}


	/*
	Download (GET)
		- Sends the contents of the file

	Parameters
		- id: ID of the files to be downloaded
	*/
	function download(parameters, callback){
		request(api + 'files/' + parameters.id + '/download', {
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
	Zip-and-Download (GET)
		- Create zipstream for given files. A redirect to created zipstream will be returned

	Parameters
		- file_ids:	File ids separated by commas. Ex: 1,2,3,4
	*/
	function zipDownload(parameters, callback){
		request(api + 'files/zip', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token,
	    			file_ids: parameters.file_ids
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Sharing (POST)
		- Shares given files with given friends or all friends

	Parameters
		- file_ids:	String. File ids separated by commas. Ex: ‘1,2,3,4’
		- friends: String. ‘everyone’ or user names of friends separated by commas. Ex: ‘johndoe,janedoe’
	*/
	function share(parameters, callback){
		request(api + 'files/share', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
					"file_ids": parameters.file_ids,
					"friends": parameters.friends
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Shared (GET)
		- Returns list of shared files and share information

	Parameters
		“shared_with” value in response may be “everyone” or an integer indicating number of people file is shared with (EX: “everyone” or 2)
	*/
	function shared(parameters, callback){
		request(api + 'files/shared', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.shared);
	   		});
	}


	/*
	Shared with (GET)
		- Returns list of users file is shared with. Each result item contains a share id which can be used for unsharing

	Parameters
		- id: Shared your files id
	*/
	function shared_with(parameters, callback){
		request(api + 'files/' + parameters.id + '/shared-with', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body['shared-with']);
	   		});
	}


	/*
	Unshare (POST)
		- Unshares given file from given friends or from everyone.

	Parameters
		- shares: String. ‘everyone’ or share ids separated by commas. Ex: ‘1,2,3,4’
	*/
	function unshare(parameters, callback){
		request(api + 'files/' + parameters.id + '/unshare', {
	    		method:'POST',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		},
	    		formData: {
					"shares": parameters.shares ? parameters.shares : 'everyone'
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Subtitles (GET)
		- Lists available subtitles for user’s preferred language. User must select “Default Subtitle Language” from settings page. See: Account Info

	Parameters
		- id: File id

	Fiedls
		- key: This is the key used for Download Subtitle
		- language: Language name in English. This may be null. We are working on improving it
		- name: Subtitle files name
		- source: Where we got this subtitle from. More details below

	Sources
		- folder: Putio has it. A srt file that has identical parent folder and name with the video
		- mkv: Extracted from MKV video file
		- opensubtitles: From opensubtitles
	*/
	function subtitles(parameters, callback){
		request(api + 'files/' + parameters.id + '/subtitles', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.subtitles);
	   		});
	}


	/*
	Download Subtitle (GET)
		- Sends the contents of the subtitle file. There is a powerful built in key called default. If you use it, putio searches for a subtitle in the following order and returns the first match:

			1. A subtitle file that has identical parent folder and name with the video.
			2. Subtitle file extracted from video if the format is MKV.
			3. First match from opensubtitles.

	Parameters
		- format: Subtitle file format. Default is srt, webvtt can be requested
	*/
	function downloadSubtitle(parameters, callback){
		request(api + 'files/' + parameters.id + '/subtitles/' + parameters.key, {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token,
	    			format: parameters.format ? parameters.format : 'srt'
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body);
	   		});
	}


	/*
	Events
		- List of dashboard events. Includes download and share events
	*/
	function events(parameters, callback){
		request(api + 'events/list', {
	    		method:'GET',
	    		json: true,
	    		qs: {
	    			oauth_token: oauth_token
	    		}
	   	}, function(err, res, body){
	    		if(err){ return callback(err); }

	    		callback(null, body.events);
	   		});
	}


	/*
	Events Delete
		- Clear all dashboard events. User’s home screen (dashboard) which uses same data will also be cleared at Put.io website
	*/
	function eventsDelete(parameters, callback){
		request(api + 'events/delete', {
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
		search: search,
		uploadFromURL: uploadFromURL,
		createFolder: createFolder,
		getFile: getFile,
		deleteFile: deleteFile,
		renameFile: renameFile,
		moveFile: moveFile,
		convertToMP4: convertToMP4,
		getMP4Status: getMP4Status,
		download: download,
		zipDownload: zipDownload,
		share: share,
		shared: shared,
		shared_with: shared_with,
		unshare: unshare,
		subtitles: subtitles,
		downloadSubtitle: downloadSubtitle,
		events: events,
		eventsDelete: eventsDelete
	}
}

module.exports = Files;