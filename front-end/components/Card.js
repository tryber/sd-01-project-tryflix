import React from 'react';
import ActiveLink from './ActiveLink';

const Card = ({ serie }) => (
  <div key={serie.id}>
    <ActiveLink activeClassName="active" href={`/details/${serie.id}`}>
      <div>
        <img src={serie.image} width="25%" />
        <div>
          <div>{serie.name}</div>
        </div>
      </div>
    </ActiveLink>
  </div>
);

export default Card;
