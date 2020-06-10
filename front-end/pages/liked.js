import fetch from 'node-fetch';
import PropTypes from 'prop-types';

import ListSeries from '../components/ListSeries';

export async function getServerSideProps() {
  const response = await fetch(
    'http://localhost:3001/liked',
  );
  const series = await response.json();

  return {
    props: {
      series,
    },
  };
}

const favoritesSeries = ({ series }) => ListSeries(series, 'Meus Favoritos', 'Voltar');

favoritesSeries.propTypes = {
  series: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
  })),
};

favoritesSeries.defaultProps = {
  series: [{
    id: 1,
    name: 'Adicione alguma série',
    image: 'Visualize as imagens das suas séries',
    liked: false,
  }],
};

export default favoritesSeries;
