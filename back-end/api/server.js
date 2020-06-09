const express = require('express');
const cors = require('cors');
const path = require('path');

const rescue = require('../rescue');
const { series } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public', 'images')));

const apiRoutes = express.Router();

apiRoutes.get('/', series.listSeries);
apiRoutes.get('/liked', rescue(series.listLikedSeries));
apiRoutes.get('/:id', rescue(series.showSeriesDetails));
apiRoutes.put('/:id', rescue(series.updateLiked));

app.use(apiRoutes);

app.use('*', (_req, res) => res.status(404).send({ message: 'Page Not Found' }));

app.use((err, _req, res, _next) => res.status(500).json({ message: err.message }));

module.exports = app;
