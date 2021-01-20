const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8080;

app.listen(port, () => {
    console.log('Você está rodando na porta 3000.')
});;