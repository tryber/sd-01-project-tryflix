import { putAPI, getAPI } from './seriesAPI';

export const renderFavorite = async (setList, id, list) => {
  if (list !== 0) await setList(0);
  await setList(id);
};

export const renderCliente = async (setSeries, list, liked = '') => {
  if (list !== 0) await putAPI(list);
  setSeries(await getAPI(liked));
};
