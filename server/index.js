const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + 'doge.png'));

app.listen(8080, () => {});
``