import fetch from 'node-fetch';

const API_SERIES = 'http://localhost:3001/';

export const putAPI = async (id) => {
  try {
    const response = await fetch(`${API_SERIES}${id}`, { method: 'PUT' });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAPI = async (liked = '') => {
  try {
    const response = await fetch(`${API_SERIES}${liked}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const renderCliente = async (setSeries, list, liked = '') => {
  if (list !== 0) await putAPI(list);
  setSeries(await getAPI(liked));
};
