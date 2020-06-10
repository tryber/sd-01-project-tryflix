import React from 'react';
import axios from 'axios';

export async function getServeSideProps() {
  const url = 'http://localhost:3001/favorito/';
  const data = await axios.get(url).then(response => response);
  // const response = await fetch(url)
  //console.log('value', data);
  return { props: { data } };
}
function favoritos( props ) {
  console.log('→→→2♠', props);
  return <div>favoritos</div>;
}

export default favoritos;
