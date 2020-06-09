const likedToBoolean = ({ series_id: id, favorite: liked, name, ...rest }) => {
  if (liked === 0) liked = false;
  else liked = true;
  const imageName = name.replace(' ', '_').toLowerCase();
  const imageLink = `http://localhost:3001/${imageName}.png`;
  return { id, name, ...rest, imageLink, liked };
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
