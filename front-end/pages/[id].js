import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getAPI, renderCliente } from '../service/seriesAPI';
import DetailSerie from '../components/DetailSerie';

export async function getServerSideProps({ params: { id } }) {
  const data = await getAPI(id);

  return {
    props: {
      data,
    },
  };
}

const detailSerie = ({ data }) => {
  const [list, setList] = useState(0);
  const [serie, setSeries] = useState(data);

  useEffect(() => {
    renderCliente(setSeries, list, serie.id);
  }, [list]);

  if (!serie) return 'Loading';
  return DetailSerie(serie, setList);
};

detailSerie.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default detailSerie;
