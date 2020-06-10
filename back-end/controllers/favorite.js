const express = require('express');

const router = express.Router();

const Series = require('../models/Series');

router.get('/', async (_req, res) => {
  const data = await Series.listFavoriteSeries();
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const update = await Series.alternateFavorite(req.params.id);
  if (!update) return res.status(422).json({ message: 'Id not exist.' });
  res.status(200).json({ message: 'success' });
});

module.exports = router;
