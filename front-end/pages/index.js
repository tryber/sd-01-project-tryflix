import fetch from 'node-fetch';
import Link from 'next/link';

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

const mainPage = ({ series }) => (
  <div>
    <h1>Series</h1>
    <Link href={'/liked'}>
      <a>Favoritos</a>
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

export default mainPage;
