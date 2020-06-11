import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListSeries from '../components/ListSeries';

import { getAPI, renderCliente } from '../service/seriesAPI';

export async function getServerSideProps() {
  const data = await getAPI();

  return {
    props: {
      data,
    },
  };
}

const seriesList = ({ data }) => {
  const [list, setList] = useState(0);
  const [series, setSeries] = useState(data);

  useEffect(() => {
    renderCliente(setSeries, list);
  }, [list]);

  if (!series) return 'Loading';
  return ListSeries(series, 'Séries', 'Favoritos', 'liked', setList);
};

seriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
};

export default seriesList;
