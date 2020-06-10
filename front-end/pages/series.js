<<<<<<< HEAD
import ListSeries from '../components/ListSeries'
import getApi from '../service/api';

export async function getServerSideProps() {
  const data = await getApi('http://localhost:3001/series')
  return {
    props: {
      data,
    },
  };
}

const series = ({ data }) => {
  return (
    <div>
      <h1>Series</h1>
      <ListSeries list={data} />
    </div>
  )
=======
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
>>>>>>> 03e21b96fffb2026c2b9fbd67f762ebef6d36e0d
}

export default series;
