const likedToBoolean = ({ series_id: id, favorite: liked, ...rest }) => {
  if (liked === 0) liked = false;
  else liked = true;
  return { id, ...rest, liked };
}

const rescue = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    console.log(err.name, err.message);
    res.status(400).json({ message: err.name, error: err.message });
    next(err);
  }
};

module.exports = {
  likedToBoolean,
  rescue,
}
