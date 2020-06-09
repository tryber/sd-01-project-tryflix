const express = require('express');

const router = express.Router();

const Series = require('../models/Series');

router.get('/:id', async (req, res) => {
  const update = await Series.alternateFavorite(req.params.id);
  res.status(200).send({ message: update });
});

module.exports = router;
