import React from 'react';
import ActiveLink from '../components/ActiveLink';

export async function getServerSideProps() {
  const url = 'http://localhost:3001/favorite';
  const response = await fetch(url);
  const series = await response.json();
  return {
    props: {
      series,
    },
  };
}

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  changeFavorite = (id) => {
    fetch(`http://localhost:3001/favorite/${id}`);
    fetch('http://localhost:3001/favorite')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const data = this.state.data || this.props.series;
    return (
      <div>
        <h1>Meus favoritos</h1>
        <ActiveLink activeClassName="active" href="/list">
          <a className="nav-link">Voltar</a>
        </ActiveLink>
        {data.map((serie) => (
          <div key={serie.id}>
            <ActiveLink activeClassName="active" href={`/series/${serie.id}`}>
              <div>
                <img src={serie.image} width="25%" />
                <div>
                  <div>{serie.name}</div>
                </div>
              </div>
            </ActiveLink>
            <button onClick={() => this.changeFavorite(serie.id)}>
              Desfavoritar
            </button>
          </div>
        ))}
      </div>
    );
  };
}

export default Favorites;
