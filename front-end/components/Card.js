import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from './ActiveLink';

const Card = ({ serie }) => (
  <div key={serie.id}>
    <ActiveLink activeClassName="active" href={`/details/${serie.id}`}>
      <div>
        <img src={serie.image} width="25%" alt={serie.name} />
        <div>
          <div>{serie.name}</div>
        </div>
      </div>
    </ActiveLink>
  </div>
);

Card.propTypes = {
  serie: PropTypes.string.isRequired,
};

export default Card;
