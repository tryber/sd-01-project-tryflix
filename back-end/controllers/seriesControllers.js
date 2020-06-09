const model = require('../model/series');

exports.listSeries = async (_req, res) => {
  const list = await model.showSeries();

  return res.status(200).json(list);
};

exports.showSeriesDetails = async (req, res) => {
  const { id } = req.params;
  const detail = await model.seriesDetails(id);

  if (!detail) return res.status(404).send({ message: 'Movie is not found!' });
  return res.status(200).send(detail);
};

exports.updateLiked = async (req, res) => {
  const id = req.params.id;

  await model.likeDeslike(id);
  return res.status(200).send({ message: 'Success!' });
};

exports.listLikedSeries = async (_req, res) => {
  const likedSeries = await model.showLikedSeries();

  return res.status(200).json(likedSeries);
};
