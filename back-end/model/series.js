const conn = require('./connection');

function likedToBoolean({ series_id: id, favorite: liked, ...rest }) {
  if (liked === 0) liked = false;
  else liked = true;
  return { id, ...rest, liked };
}

function showSeries() {
  const query = 'SELECT series_id, name, favorite FROM series ORDER BY name';

  return new Promise(async (resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) return reject(err);

      const listSeries = [];

      results.map(serieData => listSeries.push(likedToBoolean(serieData)));
      console.log(listSeries);
      resolve(listSeries);
    });
  });
}

function detailSerie(id) {
  const query = `SELECT s.series_id, s.name, g.genre, s.description,
  CONCAT(DAY(s.release_date),'/', MONTH(s.release_date),'/', YEAR(s.release_date)) AS releaseDate,
  s.favorite FROM series AS s
  INNER JOIN genre AS g
  ON s.genre_id = g.genre_id
  WHERE s.series_id = ${id};`;

  return new Promise(async (resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) return reject(err);

      const details = results.find(({series_id}) => series_id === id);
      console.log(likedToBoolean(details))
      resolve(likedToBoolean(details));
    });
  });
}

// showSeries()
detailSerie(7);

module.exports = {
  showSeries,
};
