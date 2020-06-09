module.exports = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(500).json({ message: err.message, trace: err.stack });
  }
};
