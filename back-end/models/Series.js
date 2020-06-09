const searchDataBase = require('./connection');

class Series {
  static async getAll() {
    const query = 'SELECT id, name, image, favorite FROM series ORDER BY name';
    const data = await searchDataBase(query);
    return data;
  }

  static async getSerieById(id) {
    const query = `SELECT s1.id, s1.name, ge.type, s1.description, s1.release_date, s1.favorite, s1.image
    FROM series as s1 INNER JOIN genre as ge ON s1.genre_id = ge.id_genre WHERE s1.id = ${id}`;
    const serie = await searchDataBase(query);
    return serie[0];
  }

  static async alternateFavorite(id) {
    const query = `SELECT alternateFavorite(${id})`;
    const alternate = await searchDataBase(query);
    return alternate;
  }
}

module.exports = Series;
