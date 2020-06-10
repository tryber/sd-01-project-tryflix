const express = require('express');

const router = express.Router();

const Series = require('../models/Series');

router.get('/:id', async (req, res) => {
  const update = await Series.alternateFavorite(req.params.id);
  if (!update) return res.status(422).json({ message: 'Id not exist.' });
  res.status(200).json({ message: 'success' });
});

module.exports = router;
