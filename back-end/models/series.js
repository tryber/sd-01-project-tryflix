const services = require('../services/series');

const getAllSeries = async () => {
  const allSeries = 'call getAllSeries()';
  return await services.connectionPromise(allSeries);
}

const getOneSeries = async (id) => {
  const oneSeries = `call getOneSeries(${id})`;
  return await services.connectionPromise(oneSeries);
}

module.exports = {
  getAllSeries,
  getOneSeries,
}
