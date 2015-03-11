# putio-v2

Putio API for Node JS
> Version: 0.0.1

#### Modules
* [Files](https://github.com/barisariburnu/putio-v2/blob/master/lib/files.js)
* [Transfers](https://github.com/barisariburnu/putio-v2/blob/master/lib/transfers.js)
* [Friends](https://github.com/barisariburnu/putio-v2/blob/master/lib/friends.js)
* [Account](https://github.com/barisariburnu/putio-v2/blob/master/lib/account.js)

#### Dependencies
* [npm install request](https://www.npmjs.com/package/request)

#### Usage
```js
var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

Putio.files.list({parent_id: '0'}, function(err, body){
	if(err){ return console.log(err); }
	console.log(body);
});
```
* [Usage of Files Functions](https://github.com/barisariburnu/putio-v2/blob/master/examples/files.js)
* [Usage of Transfers Functions](https://github.com/barisariburnu/putio-v2/blob/master/examples/transfers.js)
* [Usage of Friends Functions](https://github.com/barisariburnu/putio-v2/blob/master/examples/friends.js)
* [Usage of Account Functions](https://github.com/barisariburnu/putio-v2/blob/master/examples/account.js)

#### Files
```js
var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

Putio.files.list({parent_id: '0'}, callback);
Putio.files.search({query: 'Fringe'}, callback);
Putio.files.uploadFromURL({url: 'MagnetURL', parent_id: '0'}, callback);
Putio.files.createFolder({name: 'Putio', parent_id: '0'}, callback);
Putio.files.getFile({id: '0', parent_id: '1'}, callback);
Putio.files.deleteFile({file_ids: '0'}, callback);
Putio.files.renameFile({file_id: '0', name: 'Putio'}, callback);
Putio.files.moveFile({file_ids: '0', parent_id: '1'}, callback);
Putio.files.convertToMP4({id: '0'}, callback);
Putio.files.getMP4Status({id: '0'}, callback);
Putio.files.download({id: '0'}, callback);
Putio.files.zipDownload({file_ids: '0'}, callback);
Putio.files.share({file_ids: '0', friends: 'barisariburnu'}, callback);
Putio.files.shared(null, callback);
Putio.files.shared_with({id: '0'}, callback);
utio.files.unshare({id: '0', shares: '1'}, callback);
Putio.files.subtitles({id: '0'}, callback);
Putio.files.downloadSubtitle({id: '0', key: 'key', format: 'webvtt'}, callback);
Putio.files.events(null, callback);
Putio.files.eventsDelete(null, callback);
```
#### Transfers
```js
var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

Putio.transfers.list(null, callback);
Putio.transfers.add({url: 'MagnetURL'}, callback);
Putio.transfers.getTransfer({id: '0'}, callback);
Putio.transfers.retry({id: '0'}, callback);
Putio.transfers.cancel({transfer_ids: '0'}, callback);
Putio.transfers.clean(null, callback);
```
#### Friends
```js
var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

Putio.friends.list(null, callback);
Putio.friends.friendRequests(null, callback);
Putio.friends.sendRequest({username: 'barisariburnu'}, callback);
Putio.friends.approve({username: 'barisariburnu'}, callback);
Putio.friends.deny({username: 'barisariburnu'}, callback);
Putio.friends.unfriend({username: 'barisariburnu'}, callback);
```
#### Account
```js
var Putio = require('../putio.js')('YOUR_OAUTH_TOKEN');

Putio.account.info(null, callback);
Putio.account.settings(null, callback);
Putio.account.update({extraction_default: 'False', is_invisible: 'False'}, callback);
```