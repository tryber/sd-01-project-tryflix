import React from 'react';
import Link from 'next/link';

import { renderFavorite } from '../service/updatePages';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Favoritar';
  return 'Desfavoritar';
};

const ListSeries = (series, title, linkText, link = '', setList, list) => (
  <div>
    <h1>{title}</h1>
    <Link href={`/${link}`}>
      <a>{linkText}</a>
    </Link>
    <ul>
      {series.map(({ id, name, image, liked }) => (
        <section key={id}>
          <h1>Título: {name}</h1>
          <section>
            <button
            type="button"
            onClick={() => renderFavorite(setList, id, list)}
            >
              <h3>{favoriteSerie(liked)}</h3>
            </button>
          </section>
          <Link href={`/${id}`}>
            <img alt={`title-${name}`} src={image} />
          </Link>
        </section>
      ))}
    </ul>
  </div>
);

export default ListSeries;
