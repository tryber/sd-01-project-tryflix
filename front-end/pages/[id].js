import fetch from 'node-fetch';
import Link from 'next/link';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Série Desfavoritada';
  return 'Série Favoritada';
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

const mainPage = ({ serie }) => (
  <div>
    <h1>{serie.name}</h1>
    <Link href={'/'}>
      <a>Voltar</a>
    </Link>
    <ul>
      <section>
        <h1>Título: {serie.name}</h1>
        <h3>{favoriteSerie(serie.liked)}</h3>
        <img src={`${serie.image}`} />
        <h3>Gênero: {serie.genre}</h3>
        <h3>Data de Lançamento: {serie.releaseDate}</h3>
        <p>Sinopse: {serie.description}</p>
      </section>
    </ul>
  </div>
);

export default mainPage;
