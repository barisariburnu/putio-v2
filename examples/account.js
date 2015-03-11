var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

// Example info:
Putio.account.info(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example settings:
Putio.account.settings(null, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});


// Example update:
Putio.account.update({extraction_default: 'False', is_invisible: 'False'}}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});