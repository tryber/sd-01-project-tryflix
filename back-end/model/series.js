const conn = require('./connection');
const handleSeriesData = require('../service/utils');

function showSeries() {
  const query = 'SELECT series_id, name, favorite FROM series ORDER BY name';

  return new Promise((resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) return reject(err);

      const listSeries = [];
      results.map(seriesData => listSeries.push(handleSeriesData(seriesData)));
      return resolve(listSeries);
    });
  });
}

function seriesDetails(id) {
  const query = `SELECT s.series_id, s.name, g.genre, s.description,
  DATE_FORMAT(s.release_date, "%d/%m/%Y") AS releaseDate,
  s.favorite FROM series AS s
  INNER JOIN genre AS g
  ON s.genre_id = g.genre_id
  WHERE s.series_id = ${id};`;

  return new Promise((resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) return reject(err);
      return resolve(handleSeriesData(results[0]));
    });
  });
}

async function likeDeslike(id) {
  const serireIsFavorite = `SELECT favorite FROM series WHERE series_id = ${id}`;
  const isLiked = await new Promise((resolve, reject) => {
    conn.query(serireIsFavorite, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

  let favorite = 0;
  if (isLiked[0].favorite === 1) favorite = 0;
  else favorite = 1;

  const updateQuery = `UPDATE series SET favorite = ${favorite} WHERE series_id = ${id}`;
  await conn.query(updateQuery, (err, results) => {
    if (err) throw err;
    return results;
  });
}

async function showLikedSeries() {
  const selectFavoriteSeries = 'SELECT series_id, name FROM series WHERE favorite = 1 ORDER BY name';
  return new Promise((resolve, reject) => {
    conn.query(selectFavoriteSeries, (err, results) => {
      if (err) return reject(err);
      const favoriteSeries = [];
      results.map(seriesData => favoriteSeries.push(handleSeriesData(seriesData)));
      return resolve(favoriteSeries);
    });
  });
}

module.exports = {
  showSeries,
  seriesDetails,
  likeDeslike,
  showLikedSeries,
};
