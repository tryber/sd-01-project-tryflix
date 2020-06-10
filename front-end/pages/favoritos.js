/* Nossa função será executada no contexto do servidor, onde não existe Fetch API.
   Por isso, usamos uma biblioteca externa para prover essa funcionalidade. */
import fetch from 'node-fetch';

/* Recebe um livro e retorna um objeto contendo apenas seu nome */

/* Esta função precisa ser exportada para que o Next.js consiga utilizá-la */
export async function getServerSideProps() {
  /* Buscamos a lista dos livros de Game of Thrones */
  const response = await fetch(
    'http://localhost:3001/series'
  );
  const data = await response
    .json()
    /* Removemos as outras propriedades do objeto livro, pois só precisamos do nome */
    .then((res) => res);

  /* Retornamos os livros recebidos da API em forma de props, para o componente */
  return {
    props: {
      data,
    },
  };
}

/* O componente recebe os livros como uma prop */
const favoritos = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Favoritos</h1>

    </div>
  )
}

export default favoritos;
