var files = require('./files.js');

// Example list:
list({parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example search:
search({query: 'Fringe'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example uploadFromUrl:
uploadFromURL({url: 'magneturl', parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example createFolder:
createFolder({name: 'Putio', parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example getFile:
getFile({id: '123456789', parent_id: '987654321'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example deleteFile:
deleteFile({file_ids: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example renameFile:
renameFile({file_id: '123456789', name: 'Putio'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example moveFile:
moveFile({file_ids: '123456789', parent_id: '280356134'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example convertToMP4:
convertToMP4({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example getMP4Status:
getMP4Status({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example download:
download({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example zipDownload:
zipDownload({file_ids: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example share:
share({file_ids: '123456789', 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})

// Example shared:
shared({shared_with: 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
})