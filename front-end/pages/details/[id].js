import React from 'react';
import ActiveLink from '../../components/ActiveLink';

export async function getServerSideProps({ params: { id: serieId } }) {
  const url = `http://localhost:3001/series/${serieId}`;
  const response = await fetch(url);
  const serie = await response.json();
  return {
    props: {
      serie,
    },
  };
}

const formatData = (data) => {
  const arrayData = data.split('-');
  const day = arrayData[2].split('T')[0];
  return `${day}/${arrayData[1]}/${arrayData[0]}`;
};

const Details = ({ serie }) => (
  <div>
    <ActiveLink activeClassName="active" href="/list">
      <a className="nav-link">Voltar</a>
    </ActiveLink>
    <h1>{serie.name}</h1>
    {serie.favorite ? <p>Série favorita</p> : <p />}
    <div>
      <img src={serie.image} />
      <div>Gênero: {serie.type}</div>
      <div>Data de lançamento: {formatData(serie.release_date)}</div>
      <div>Descrição: {serie.description}</div>
    </div>
  </div>
);

export default Details;
