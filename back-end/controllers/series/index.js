const Series = require('../../models/series');
const services = require('../../services/series');

const getAll = async (_req, res) => {
  const data = await Series.getAllSeries();
  const result = services.updateImages(data);
  const sortedList = services.sortedList(result);
  res.status(200).json(sortedList);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const data = await Series.getOneSeries(id);
  const result = services.updateImages(data);
  if (!result) return res.status(404).json({ message: 'ERROR' })
  res.status(200).json(result[0]);
};

module.exports = {
  getAll,
  getOne,
}
