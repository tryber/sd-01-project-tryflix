import React from 'react';
import Link from 'next/link';

import { renderFavorite } from '../service/updatePages';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Série Desfavorita';
  return 'Série Favorita';
};

const DetailSerie = (serie, setList, list) => (
  <div>
    <h1>{serie.name}</h1>
    <Link href={'/'}>
      <a>Voltar</a>
    </Link>
    <ul>
      <section>
        <h1>Título: {serie.name}</h1>
        <section>
          <button type="button" onClick={() => renderFavorite(setList, serie.id, list)}>
            <h3>{favoriteSerie(serie.liked)}</h3>
          </button>
        </section>
        <img alt={serie.name} src={serie.image} />
        <h3>Gênero: {serie.genre}</h3>
        <h3>Data de Lançamento: {serie.releaseDate}</h3>
        <p>Sinopse: {serie.description}</p>
      </section>
    </ul>
  </div>
);

export default DetailSerie;
