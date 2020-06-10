const express = require('express');
const cors = require('cors');
const series = require('../controllers/series');
const rescue = require('../rescue');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
const apiRoutes = express.Router();

function factory() {
  apiRoutes.use(express.static(path.resolve(__dirname, '..', 'public', 'images')));
  apiRoutes.get('/series', rescue(series.getAll));
  apiRoutes.get('/series/:id', rescue(series.getOne));
  apiRoutes.get('/favorito', rescue(series.getAllFavorite));
  apiRoutes.put('/favorito/:id', rescue(series.updateFavorite));

  apiRoutes.use((_req, res) => (
    res.status(404).json({ message: 'SHOW DE BOLA NADA APARECEU, BURRO!' })
  ));
  app.use(apiRoutes);
  return app;
}

module.exports = {
  factory,
};
