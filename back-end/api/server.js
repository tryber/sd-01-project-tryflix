const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public', 'images')));

// const apiRoutes = express.Router();

// app.use(apiRoutes);
app.use((err, _req, res, _next) => res.status(500).json({ message: err.message }));

module.exports = app;
