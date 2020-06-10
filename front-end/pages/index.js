import PropTypes from 'prop-types';

import ListSeries from '../components/ListSeries';
import { getAPI } from '../service/localhostAPI';

export async function getServerSideProps() {
  const series = await getAPI();

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
