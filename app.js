const express = require('express');
const path = require('path');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});