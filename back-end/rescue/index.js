module.exports = fn => async (req, res, next) => {
  try {
    console.log('dentro do rescue', req);
    await fn(req, res, next);
  } catch (err) {
    res.status(500).json({ message: err.message, trace: err.stack });
  }
};
