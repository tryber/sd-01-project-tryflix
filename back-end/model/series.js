const conn = require('./connection');
const { likedToBoolean } = require('../service/utils');

function showSeries() {
  const query = 'SELECT series_id, name, favorite FROM series ORDER BY name';

  return new Promise(async (resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) return reject(err);

      const listSeries = [];

      results.map(serieData => listSeries.push(likedToBoolean(serieData)));
      resolve(listSeries);
    });
  });
}

function detailSerie(id) {
  const query = `SELECT s.series_id, s.name, g.genre, s.description,
  DATE_FORMAT(s.release_date, "%d/%m/%Y") AS releaseDate,
  s.favorite FROM series AS s
  INNER JOIN genre AS g
  ON s.genre_id = g.genre_id
  WHERE s.series_id = ${id};`;

  return new Promise(async (resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) return reject(err);
      if(!results[0]) return resolve({ message: 'Movie is not found!' });

      resolve(likedToBoolean(results[0]));
    });
  });
}

module.exports = {
  showSeries,
  detailSerie,
};
