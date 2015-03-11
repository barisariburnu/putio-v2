var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

// Example list:
Putio.transfers.list(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example add:
Putio.transfers.add({url: 'MagnetURL'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example getTransfer:
Putio.transfers.getTransfer({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example retry:
Putio.transfers.retry({id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example cancel:
Putio.transfers.cancel({transfer_ids: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example clean:
Putio.transfers.clean(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});