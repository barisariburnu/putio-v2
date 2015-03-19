var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');


// Example list:
Putio.files.list({parent_id: '123456789'}, function(err, body){
	if(err){ return console.log(err); }

	console.log(body);
});

