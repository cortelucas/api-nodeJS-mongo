const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/controllers/index')(app);

const port = 8000;
app.listen(port, () => console.log(`Servidor rodando em 'http://localhost:${port}'`))