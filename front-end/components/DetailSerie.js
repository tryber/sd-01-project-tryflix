import React from 'react';
import Link from 'next/link';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Série Desfavorita';
  return 'Série Favorita';
};

const DetailSerie = (serie, setList) => (
  <div>
    <h1>{serie.name}</h1>
    <Link href={'/'}>
      <a>Voltar</a>
    </Link>
    <ul>
      <section>
        <h1>Título: {serie.name}</h1>
        <h3 onClick={() => setList(serie.id)} >{favoriteSerie(serie.liked)}</h3>
        <img alt={serie.name} src={serie.image} />
        <h3>Gênero: {serie.genre}</h3>
        <h3>Data de Lançamento: {serie.releaseDate}</h3>
        <p>Sinopse: {serie.description}</p>
      </section>
    </ul>
  </div>
);

export default DetailSerie;
