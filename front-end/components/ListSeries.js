import React from 'react';
import CardSerie from './CardSerie';

const ListReact = ({ list }) => {
  return (
    <div>
      {list.map(item => (
        <CardSerie key={item.id} details={item} />
      ))}
    </div>
  );
};

ListReact.propTypes = {
  list: PropTypes.string.isRequired,
};

export default ListReact;
