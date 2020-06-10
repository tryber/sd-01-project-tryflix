import fetch from 'node-fetch';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router'

import putAPI from '../service/localhostAPI';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Favoritar';
  return 'Desfavoritar';
};

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

const seriesList = ({ series }) => (
  <div>
    <h1>Series</h1>
    <Link href={'/liked'}>
      <a>Favoritos</a>
    </Link>
    <ul>
      {series.map(({ id, name, image, liked }) => (
        <section key={id}>
          <h1>Title: {name}</h1>
          <h3 onClick={() => (putAPI(id), Router.reload())}>{favoriteSerie(liked)}</h3>
          <Link href={`/${id}`}>
            <img alt={`title-${name}`} src={image} />
          </Link>
        </section>
      ))}
    </ul>
  </div>
);

seriesList.propTypes = {
  series: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
};

export default seriesList;
