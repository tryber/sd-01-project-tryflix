const express = require('express');
const router = express.Router();

const Series = require('../models/Series');

router.get('/', async (req, res) => {
    const seriesData = await Series.getAll();
    res.send({message: seriesData});
});

module.exports = router;
