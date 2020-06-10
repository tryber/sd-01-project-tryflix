import React from 'react;';
import ListSeries from '../components/ListSeries';
import getApi from '../service/api';

export async function getServerSideProps() {
  const data = await getApi('http://localhost:3001/series');
  return {
    props: {
      data,
    },
  };
}

const series = ({ data }) => (
  <div>
    <h1>Series</h1>
    <ListSeries list={data} />
  </div>
);

series.propTypes = {
  data: PropTypes.string.isRequired,
};

export default series;
