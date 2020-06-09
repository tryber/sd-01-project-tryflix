const handleImageLink = (name) => {
  const imageName = name.replace(/[- ]/g, '_').toLowerCase();
  return `http://localhost:3001/${imageName}.png`;
};

const likedToBool = (favorite) => {
  if (favorite === 0) return false;
  return true;
};

const handleSeriesData = ({ series_id: id, favorite, name, ...rest }) => {
  const image = handleImageLink(name);
  const seriesData = { id, name, ...rest, image };
  if (favorite) seriesData.liked = likedToBool(favorite);
  return seriesData;
};

module.exports = handleSeriesData;
