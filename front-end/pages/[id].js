import fetch from 'node-fetch';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { putAPI } from '../service/localhostAPI';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Série Desfavorita';
  return 'Série Favorita';
};

export async function getServerSideProps({ params: { id } }) {
  const response = await fetch(
    `http://localhost:3001/${id}`,
  );
  const serie = await response.json();

  return {
    props: {
      serie,
    },
  };
}

const detailSerie = ({ serie }) => (
  <div>
    <h1>{serie.name}</h1>
    <Link href={'/'}>
      <a>Voltar</a>
    </Link>
    <ul>
      <section>
        <h1>Título: {serie.name}</h1>
        <h3 onClick={() => (putAPI(serie.id), Router.reload())} >{favoriteSerie(serie.liked)}</h3>
        <img alt={serie.name} src={serie.image} />
        <h3>Gênero: {serie.genre}</h3>
        <h3>Data de Lançamento: {serie.releaseDate}</h3>
        <p>Sinopse: {serie.description}</p>
      </section>
    </ul>
  </div>
);

detailSerie.propTypes = {
  serie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default detailSerie;
