import fetch from 'node-fetch';
import Link from 'next/link';
import PropTypes from 'prop-types';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Favoritar';
  return 'Desfavoritar';
};

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

const favoritesSeries = ({ series }) => (
  <div>
    <h1>Meus Favoritos</h1>
    <Link href={'/'}>
      <a>Voltar</a>
    </Link>
    <ul>
      {series.map(({ id, name, image, liked }) => (
        <section key={id}>
          <h1>Title: {name}</h1>
          <h3>{favoriteSerie(liked)}</h3>
          <Link href={`/${id}`}>
            <img alt={`title-${name}`} src={image} />
          </Link>
        </section>
      ))}
    </ul>
  </div>
);

favoritesSeries.propTypes = {
  series: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
  }),
};

favoritesSeries.defaultProps = {
  series: {
    id: 1,
    name: 'Adicione alguma série',
    image: 'Visualize as imagens das suas séries',
    liked: false,
  },
};

export default favoritesSeries;
