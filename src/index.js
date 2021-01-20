const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./controllers/authController')(app);

const port = 8000;
app.listen(port, () => console.log(`Servidor rodando em 'http://localhost:${port}'`))