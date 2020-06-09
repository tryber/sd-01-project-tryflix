const express = require('express');
const cors = require('cors');
const path = require('path');

const { series } = require('./routes');
const { rescue } = require('../service/utils');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public', 'images')));

const apiRoutes = express.Router();

apiRoutes.get('/', series.listSeries);
apiRoutes.get('/:id', rescue(series.detailAboutSerie));

app.use(apiRoutes);

app.use('*', (_req, res) => res.status(404).send('Page Not Found'));

app.use((err, _req, res, _next) => res.status(500).json({ message: err.message }));

module.exports = app;
