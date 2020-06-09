module.exports = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    console.log(err.name, err.message);
    res.status(400).json({ error: err.name, message: err.message });
    next(err);
  }
};
