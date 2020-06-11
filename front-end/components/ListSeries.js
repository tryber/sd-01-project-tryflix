import React from 'react';
import Link from 'next/link';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Favoritar';
  return 'Desfavoritar';
};

const ListSeries = (series, title, linkText, link = '', setList) => (
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
            <button type="button" onClick={() => setList(id)}>
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
