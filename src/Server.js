const express = require('express');
const app = express();

const Routes = require('./Routes');

app.use(express.static('public'))
app.use('/', Routes.Basic);

app.listen(3030);

