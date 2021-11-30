const express = require('express')
const path = require('path');
const { boiler } = require('../processes/index.js');
const bodyParser = require('body-parser');

// to run server in watch mode with nodemon: use command "nodemon" in terminal IN SERVER DIRECTORY
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.listen(port, () => console.log(`app listening on port ${port}`));