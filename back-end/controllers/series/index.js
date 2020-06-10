const Series = require('../../models/series');
const services = require('../../services/series');

const getAll = async (_req, res) => {
  const data = await Series.getAllSeries();
  if (!data || data.length === 0)
    return res.status(404).json({ message: 'ERROR' });
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
  if (![0, 1].includes(liked)) return res.status(422).json({ message: 'Invalid Data' });
  const isSeriesExist = await Series.getOneSeries(id);
  if (!isSeriesExist || isSeriesExist.length === 0)
    return res.status(404).json({ message: 'Serie not found' });
  const data = await Series.updateFavoriteSeries(liked, id);
  if (data.affectedRows === 0) return res.status(400).json({ message: 'Update failed' });
  res.status(200).json({ message: 'Update success!' });
};

const getAllFavorite = async (req, res) => {
  const data = await Series.getAllSeriesFavorite();
  if (!data || data.length === 0)
    return res.status(404).json({ message: 'ERROR' });
  const result = services.updateImages(data);
  const sortedList = services.sortedList(result);
  res.status(200).json(sortedList);
}

module.exports = {
  getAll,
  getOne,
  updateFavorite,
  getAllFavorite,
};
