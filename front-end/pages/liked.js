import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ListSeries from '../components/ListSeries';
import { getAPI, renderCliente } from '../service/seriesAPI';

export async function getServerSideProps() {
  const data = await getAPI('liked');

  return {
    props: {
      data,
    },
  };
}

const favoritesSeries = ({ data }) => {
  const [list, setList] = useState(0);
  const [series, setSeries] = useState(data);

  useEffect(() => {
    renderCliente(setSeries, list, 'liked');
  }, [list]);

  if (!series) return 'Loading';
  return ListSeries(series, 'Meus Favoritos', 'Voltar', '', setList);
};

favoritesSeries.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
  })),
};

favoritesSeries.defaultProps = {
  data: [{
    id: 1,
    name: 'Adicione alguma série',
    image: 'Visualize as imagens das suas séries',
    liked: false,
  }],
};

export default favoritesSeries;
