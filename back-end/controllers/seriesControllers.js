const model = require('../model/series');

exports.listSeries = async (_req, res) => {
  const list = await model.showSeries();

  res.status(200).json(list);
};

exports.detailAboutSerie = async (req, res) => {
  const { id } = req.params;
  const detail = await model.detailSerie(id);

  res.status(200).send(detail);
};
