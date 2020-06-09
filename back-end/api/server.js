const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'public/images')));


app.use('/series', routes.seriesList);

app.listen(port, () => console.log(`conectado na porta: ${port}`));