import React from 'react';

import axios from 'axios';

export async function getServeSideProps() {
  const url = 'http://localhost:3001/series';
  const data = await axios.get(url).then(response => response);
  console.log('value', data);
  return { props: { data } };
}

function series({ data}) {
    console.log('data da serie', data);
  return <div>series</div>;
}

export default series;
