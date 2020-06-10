import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import getApi from '../service/api';

const favoriteElement = (isFavorite, setReload, id) => {
  if (isFavorite === 1) return <button type='button' onClick={() => changeFavorite(isFavorite, setReload, id)}>Desfavoritar</button>
  return <button type='button'
    onClick={() => changeFavorite(isFavorite, setReload, id)}>Favoritar</button>
}

const changeFavorite = async (isFavorite, setReload, id) => {
  await axios.put(`http://localhost:3001/favorito/${id}`,
    {
      liked: !isFavorite ? 1 : 0,
    });
  setReload(true);
}

const CardSerie = ({ details }) => {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(details);
  useEffect(() => {
    if (reload) {
      getApi(`http://localhost:3001/series/${data.id}`)
        .then(res => {
          const { liked } = res;
          setData({ ...data, liked })
          setReload(false);
        });
    }
  }, [reload, data])

  const { id, name, genre, description, releaseDate, liked, image } = data;
  return (
    <div>
      <div>
        {!name || <h1>{name}</h1>}
        {!genre || <h2>{genre}</h2>}
        {!description || <p>{description}</p>}
        {!releaseDate || <h2>{releaseDate.split('T')[0]}</h2>}
        {!liked || liked === 0 || <h2>Favorito</h2>}
        {![1, 0].includes(liked) || favoriteElement(liked, setReload, id)}
      </div>
      {!image || <img src={image} />}
      {!releaseDate && <Link href={`/series/${id}`}><h2>More Details</h2></Link>}
    </div>
  )
}

export default CardSerie;

