const services = require('../services/series');

const getAllSeries = async () => {
  const query = 'call getAllSeries()';
  return services.connectionPromise(query);
};

const getOneSeries = async id => {
  const query = `call getOneSeries(${id})`;
  return services.connectionPromise(query);
};

const updateFavoriteSeries = async (liked, id) => {
  const query = `call updateLikedSeries(${liked} ,${id})`;
  return services.connectionPromise(query);
};

const getAllSeriesFavorite = async () => {
  const query = 'call getAllFavoriteSeries()';
  return services.connectionPromise(query);
};

module.exports = {
  getAllSeries,
  getOneSeries,
  updateFavoriteSeries,
  getAllSeriesFavorite,
};
