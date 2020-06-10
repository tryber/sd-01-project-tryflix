import fetch from 'node-fetch';
import PropTypes from 'prop-types';

import ListSeries from '../components/ListSeries';

export async function getServerSideProps() {
  const response = await fetch(
    'http://localhost:3001',
  );
  const series = await response.json();

  return {
    props: {
      series,
    },
  };
}

const seriesList = ({ series }) => ListSeries(series, 'Séries', 'Favoritos', 'liked');

seriesList.propTypes = {
  series: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
};

export default seriesList;
