var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');


// Example list:
Putio.files.list({parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example search:
Putio.files.search({query: 'Fringe'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example uploadFromUrl:
Putio.files.uploadFromURL({url: 'MagnetURL', parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example createFolder:
Putio.files.createFolder({name: 'Putio', parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body.file);
});


// Example getFile:
Putio.files.getFile({id: '987654321', parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example deleteFile:
Putio.files.deleteFile({file_ids: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example renameFile:
Putio.files.renameFile({file_id: '123456789', name: 'Putio'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example moveFile:
Putio.files.moveFile({file_ids: '987654321', parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example convertToMP4:
Putio.files.convertToMP4({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example getMP4Status:
Putio.files.getMP4Status({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example download:
Putio.files.download({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example zipDownload:
Putio.files.zipDownload({file_ids: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example share:
Putio.files.share({file_ids: '123456789', friends: 'barisariburnu'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example shared:
Putio.files.shared(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example share-with:
Putio.files.shared_with({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example unshare:
Putio.files.unshare({id: '123456789', shares: '987654321'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example subtitles:
Putio.files.subtitles({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example downloadSubtitle:
Putio.files.downloadSubtitle({id: '123456789', key: 'key', format: 'webvtt'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example events
Putio.files.events(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body.events);
});


// Example eventsDelete
Putio.files.eventsDelete(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});
