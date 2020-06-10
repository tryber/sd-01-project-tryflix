import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { putAPI } from '../service/localhostAPI';

const favoriteSerie = (liked) => {
  if (liked === false) return 'Favoritar';
  return 'Desfavoritar';
};

const ListSeries = (series, title, linkText, link = '') => (
  <div>
    <h1>{title}</h1>
    <Link href={`/${link}`}>
      <a>{linkText}</a>
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

export default ListSeries;
