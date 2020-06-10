import CardSerie from '../../components/CardSerie';
import React, { useState, useEffect } from 'react';
import getApi from '../../service/api';

export async function getServerSideProps({ params: { id } }) {
  const data = await getApi(`http://localhost:3001/series/${id}`);

  return {
    props: {
      data,
    },
  };
}

const Details = ({ data }) => {
  const [reload, setReload] = useState(false);
  useEffect(() => {});
  return (
    <div>
      <CardSerie details={data} shouldReload={() => setReload(!reload)} />
    </div>
  );
};

export default Details;
