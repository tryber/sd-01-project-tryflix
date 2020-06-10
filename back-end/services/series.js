const conn = require('../models/connection');

const connectionPromise = valueQuery => {
  return new Promise((resolve, reject) => {
    conn.query(valueQuery, (err, result) => {
      if (err) reject(err);
      resolve(result[0] || result);
    });
  })
};

const getPathImage = name => (
  `http://localhost:${process.env.PORT}/${name.toLowerCase().replace(' ', '_')}.png`
);

const updateImages = item => {
  if (item.length >= 1) item.map(element => ({ ...element, image: getPathImage(element.name) }));
  return { ...item, image: getPathImage(item.name) };
};

const sortedList = (array) => (
  array.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);

module.exports = {
  connectionPromise,
  updateImages,
  sortedList,
};
