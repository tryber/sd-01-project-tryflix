import fetch from 'node-fetch';

const API_UPDATE_SERIES = 'http://localhost:3001/';

const putAPI = async (id) => {
  try {
    const response = await fetch(`${API_UPDATE_SERIES}${id}`, { method: 'PUT' });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = putAPI;
