const searchDataBase = require('./connection');

class Series {
  static async getAll () {
    const query = 'SELECT id, name, image, favorite FROM series ORDER BY name';
    const data = await searchDataBase(query);
    return data;
  }
}

module.exports = Series;