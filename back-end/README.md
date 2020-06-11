#### Como utilizar variáveis de ambiente no projeto

- Instale a biblioteca [dotenv](https://www.npmjs.com/package/dotenv).

- Crie o arquivo `.env` na raiz do projeto.

- Adicione o arquivo `.env` na lista de arquivos ignorados no arquivo `.gitignore`.

- Defina as variáveis desejadas dentro do arquivo `.env`, no nosso caso, criamos as variáveis `DB_HOST`, `DB_USER`, `DB_PASS` e `DB_NAME`.

- Defina o destino de sua configuração com o comando `require('dotenv').config({ path: enviromentVariable })` no local onde for utilizar suas variáveis, onde `enviromentVariable` é o caminho até seu arquivo `.env`, no nosso caso utilizamos `path.resolve(__dirname, '..', '..', '.env')`.

- Utilize suas variáveis com `process.env.VARIÁVEL`, onde `VARIÁVEL` é o nome da variável de ambiente que você definiu dentro do arquivo `.env`.