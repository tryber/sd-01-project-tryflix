import ListSeries from '../components/ListSeries'
import getApi from '../service/api';

export async function getServerSideProps() {
  const data = await getApi('http://localhost:3001/favorito')
  return {
    props: {
      data,
    },
  };
}

const favoritos = ({ data }) => {
  return (
    <div>
      <h1>Favoritos</h1>
      <ListSeries list={data} />
    </div>
  )
}

export default favoritos;
