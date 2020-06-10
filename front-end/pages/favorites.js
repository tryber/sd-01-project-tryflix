import React from 'react';
import fetch from 'node-fetch';
import ActiveLink from '../components/ActiveLink';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  fetchSeries = () => {
    fetch('http://localhost:3001/favorite')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }
  componentDidMount() {
    this.fetchSeries();
  }

  changeFavorite = (id) => {
    fetch(`http://localhost:3001/favorite/${id}`);
    this.fetchSeries();
  }

  render() {
    if (!this.state.data) return <div>Loading...</div>;
    return (
      <div>
        <h1>Meus favoritos</h1>
        <ActiveLink activeClassName="active" href="/list">
          <a className="nav-link">Voltar</a>
        </ActiveLink>
        {this.state.data.map((serie) => (
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
              {serie.favorite ? "Desfavoritar" : "Favoritar"}
            </button>
          </div>
        ))}
      </div>
    );
  };
}

export default Favorites;
