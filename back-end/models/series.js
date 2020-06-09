const services = require('../services/series');

const getAllSeries = async () => {
  const query = 'call getAllSeries()';
  return await services.connectionPromise(query);
}

const getOneSeries = async (id) => {
  const query = `call getOneSeries(${id})`;
  return await services.connectionPromise(query);
}

const updateFavoriteSeries = async (liked, id) => {
  const query = `call updateLikedSeries(${liked} ,${id})`;
  return await services.connectionPromise(query);
}

module.exports = {
  getAllSeries,
  getOneSeries,
  updateFavoriteSeries,
}
