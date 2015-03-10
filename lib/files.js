var oauth_token = '0VN31592';
var api = 'https://api.put.io/v2/';

var request = require('request');

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

        callback(null, body);
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

        callback(null, body);
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

    		callback(null, body);
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

        callback(null, body);
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

    		callback(null, body);
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
Sharing (GET)
	- Returns list of shared files and share information.

Parameters
	“shared_with” value in response may be “everyone” or an integer indicating number of people file is shared with (EX: “everyone” or 2)
*/
function shared(parameters, callback){
	request(api + 'files/shared', {
    		method:'GET',
    		json: true,
    		qs: {
    			oauth_token: oauth_token,
    			shared_with: parameters.shared_with ? parameters.shared_with : 'everyone'
    		}
   	}, function(err, res, body){
    		if(err){ return callback(err); }

    		callback(null, body);
   		});
}