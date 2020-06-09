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
  if (!data || data.length === 0)
    return res.status(404).json({ message: 'ERROR' });
  const result = services.updateImages(data);
  res.status(200).json(result[0]);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { liked } = req.body;
  if (!liked && liked !== 0) return res.status(404).json({ message: 'Missing Fields' });
  if (liked !== 0 || liked !== 1) return res.status(422).json({ message: 'Invalid' });
  const isSeriesExist = await Series.getOneSeries(id);
  if (!isSeriesExist || isSeriesExist.length === 0)
    return res.status(404).json({ message: 'ERROR' });
  const data = await Series.updateFavoriteSeries(liked, id);
  res.status(200).json({ message: 'Update success!'});
};

module.exports = {
  getAll,
  getOne,
  updateFavorite,
};
