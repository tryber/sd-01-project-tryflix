const express = require('express');

const router = express.Router();

const Series = require('../models/Series');

router.get('/', async (req, res) => {
  const seriesData = await Series.getAll();
  res.status(200).json(seriesData);
});

router.get('/:id', async (req, res) => {
  const serieData = await Series.getSerieById(req.params.id);
  res.status(200).json(serieData);
});

module.exports = router;
