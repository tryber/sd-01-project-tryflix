# Boas vindas ao projeto Tryflix!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

## O que deverá ser desenvolvido

Você vai desenvolver um app full-stack! Isso significa que você vai construir tanto a API quanto o front-end, que será feito com `Server Side Rendering` 😃! Você vai, também, organizar seu código seguindo a arquitetura `MSC` (model-service-controller)!

A aplicação a ser contruída é um serviço de streaming em que será possível visualizar um catálogo de séries disponíveis e marcá-las/desmarcá-las como favoritas.

---

## Desenvolvimento

Esse repositório contém duas pastas, `back-end` e `front-end`, onde você deve desenvolver o front-end e o back-end da aplicação. Ambas as pastas contêm um projeto iniciado com as configurações básicas necessárias.

Começando pela API, você deve desenvolvê-la seguindo os padrões de arquitetura MSC, organizando o código em `modelos`, `serviços` e `controles`. Você vai desenvolver alguns endpoints, como listagem de séries.

Para o desenvolvimento dos endpoints, utilize o padrão REST e o Express.

Você deve modelar um banco de dados `MySQL` **normalizado**. Ou seja, você deve seguir as regras das formas normais.

O front-end deve ser ser feito com **Server Side Rendering**, utilizando o framework `Next.js`. Você precisará desenvolver três páginas. Essas páginas utilizarão a API para renderizar seu conteúdo.

Você pode acessar um protótipo das telas [neste link](https://www.figma.com/file/oDtjI43OdYIhhA7yWlSSsR/Tryflix?node-id=0%3A1).

**Lembre-se**: O protótipo serve apenas para você ter uma ideia de como componentizar o front-end da sua aplicação. Ou seja, **não** precisa fazer o front-end exatamente igual ao que está no protótipo.

---

## Requisitos do projeto

### Banco de dados

#### 1 - Modele e popule o banco de dados

- Crie um banco de dados `MySQL` com o nome que preferir.

- Abaixo está listado o nome, gênero, sinopse e data de lançamento de algumas séries para você utilizar no projeto. Você deve popular o banco com esses dados:

  - **The Witcher**, Fantasia, "O personagem de Cavill é um 'mutante caçador de monstros, que luta para encontrar seu lugar em um mundo onde as pessoas provam com frequência serem mais perversas que as bestas'.", 20/12/2019;

  - **Dark**, Ficção Científica, "Quatro diferentes famílias vivem em uma pequena cidade alemã. Suas vidas pacatas são completamente atormentadas quando duas crianças desaparecem misteriosamente e os segredos obscuros das suas famílias começam a ser desvendados.", 01/12/2017;

  - **Peaky Blinders**, Drama, "Série sobre uma família de gângsteres na Inglaterra no começo do século 20.", 12/09/2013;

  - **Vikings**, Drama, "A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.", 03/03/2013;

  - **Friends**, Comédia, "Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York e adoram passar o tempo livre na cafeteria Central Perk.", 22/09/1994;

  - **Brooklyn Nine-Nine**, Cómedia, "Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.", 17/09/2013;

  - **Black Mirror**, Ficção Cientifíca, "Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios.", 04/12/2011;

  - **Breaking Bad**, Ficção Policial, "O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.", 20/01/2008;

  - **Mindhunter**, Crime, "Mindhunter é uma série de televisão norte-americana de drama policial criada por Joe Penhall, e baseada no livro Mind Hunter: Inside the FBI’s Elite Serial Crime Unit escrito por John E. Douglas e Mark Olshaker.", 13/10/2017.

- Ao modelar o banco, leve em consideração as seguintes características da aplicação:

  - Deverá ser possível listar todas as séries em uma tela específica;

  - Deverá ser possível favoritar/desfavoritar séries.

- Lembre-se de modelar o seu banco de dados seguindo as [formas normais](https://course.betrybe.com/back-end/sql/normalization/).

#### 2 - Monte um `script` SQL contendo a criação de suas tabelas e inserção de dados.

Esse script será usado para avaliar o seu projeto seguindo a modelagem de banco de dados que você criou. O script deve popular o banco com os dados especificados no requisito 1.

Coloque esse script na raiz do projeto com o nome `script.sql`.

**Nota**: Lembre-se de que esses requisitos iniciais são partes muito importantes de seu projeto. Estruturar o seu banco e montar o `script` devem ser suas prioridades.

### Back-end

Lembre-se de fazer seus endpoints seguindo os padrões `REST`. Utilize o `router` do Express para auxiliá-lo.

A API deve ser iniciada com o comando `npm start` dentro da pasta `back-end` e deve escutar a porta `3001`.

#### 3 - As imagens da pasta `public/images` devem ser servidas como arquivos estáticos na rota raiz

#### 4 - Crie um endpoint para listar as séries

- O código deste endpoint deve ser organizado de acordo com a arquitetura **MSC** (model-service-controller). Utilize a camada de serviço quando for necessário.

- A listagem deve estar ordenada por nome. Ou seja, séries cujo nome começa com "A" aparecem primeiro, seguido de "B" e assim por diante. Esses dados devem chegar ordenados para o seu front-end. Dessa forma, o único trabalho que seu front-end terá é de mostrar os dados na tela.

- O corpo da resposta deve ter o seguinte formato:

  ```json
  [
    {
      "id": 123,
      "name": "Peaky Blinders",
      "image": "http://localhost:3001/peaky_blinders.png",
      "liked": true
    }
    //...
  ]
  ```

#### 5 - Crie um endpoint para retornar detalhes de uma série

- O código deste endpoint deve ser organizado de acordo arquitetura **MSC** (model-service-controller). Utilize a camada de serviço quando for necessário.

- O endpoint deve receber o id de uma série e retornar todos os dados desta série.

- O corpo da resposta deve ter o seguinte formato:

  ```json
  {
    "id": 123,
    "name": "Peaky Blinders",
    "genre": "Drama",
    "description": "Série sobre uma família de gângsteres na Inglaterra no começo do século 20.",
    "releaseDate": "12/09/2013",
    "image": "http://localhost:3001/peaky_blinders.png",
    "liked": true
  }
  ```

#### 6 - Crie um endpoint para favoritar/desfavoritar séries

- O código deste endpoint deve ser organizado de acordo arquitetura **MSC** (model-service-controller). Utilize a camada de serviço quando for necessário.

- O endpoint deve receber o id de uma série e favoritar/desfavoritar esta série.

- O mesmo endpoint deve ser usado para favoritar/desfavoritar uma série. Requisições para uma mesma série devem alternar entre os dois estados. Uma implicação disso é que não deve haver, no banco, duplicação de informação sobre as séries que uma pessoa favorita.

#### 7 - Crie um endpoint para listar as séries favoritadas

- O código deste endpoint deve ser organizado de acordo com a arquitetura **MSC** (model-service-controller). Utilize a camada de serviço quando for necessário.

- A listagem deve estar ordenada por nome. Ou seja, séries cujo nome começa com "A" aparecem primeiro, seguido de "B" e assim por diante. Esses dados devem chegar ordenados para o seu front-end. Dessa forma, o único trabalho que seu front-end terá é de mostrar os dados na tela. **Dica**: traga os dados ordenados do banco de dados.

- A sua requisição deve retornar apenas as séries favoritadas. O corpo da resposta deve ter o seguinte formato:

  ```json
  [
    {
      "id": 12,
      "name": "Breaking bad",
      "image": "http://localhost:3001/peaky_blinders.png"
    }
    //...
  ]
  ```

### Front-end

O front-end deve ser iniciado com o comando `npm run dev` dentro da pasta `front-end` e deve escutar a porta `3000`.

Você pode acessar um protótipo das telas [neste link](https://www.figma.com/file/oDtjI43OdYIhhA7yWlSSsR/Tryflix?node-id=0%3A1).

**Lembre-se**: O protótipo serve apenas para você ter uma ideia de como componentizar o front-end da sua aplicação. Ou seja, **não** precisa fazer o front-end exatamente igual ao que está no protótipo.

#### 8 - Crie uma tela de listagem de séries

- A tela deve ser renderizada utilizando SSR.

- A tela deve fazer uma requisição à API para buscar os dados de séries, em tempo de renderização no servidor.

- Os `cards` das séries deverão mostrar seu nome e imagem. Organize os dados que serão mostrados no card da forma que preferir.

- A tela deve conter um botão "Meus favoritos" que levará para a tela de séries favoritas.

- A imagem referente à série que será exibida deverá vir da URL retornada pela API.

- Cada card deve ser também um link para a página da de detalhes da série.

- O card da série deve conter um botão com o label `Favotirar/Desfavoritar`. Caso a série não tenha sido favoritada, a label do botão deve ser `Favoritar`. Caso a série já tenha sido favoritada, a label deve ser `Desfavoritar`. Esse botão deve disparar uma requisição para o endpoint que favorita/desfavorita uma série. Se a requisição for concluída com sucesso, a tela deve ser atualizada para que os cards se mantenham atualizados. Note que, embora a página seja inicialmente renderizada no servidor, esse comportamento ocorre no cliente.

#### 9 - Crie uma tela de séries favoritadas

- A tela deve ser renderizada utilizando SSR.

- A tela deve fazer uma requisição à API para buscar os dados de séries, em tempo de renderização no servidor.

- A listagem deve exibir somente as séries favoritadas.

- A imagem referente à série que será exibida deverá vir da URL retornada pela API.

- A tela deve conter o título "Meus favoritos".

- A tela deve ter um botão "Voltar". Esse botão deve redirecionar o usuário de volta para a listagem geral de séries.

- Cada card deve ser também um link para a página de detalhes da série.

#### 10 - Crie uma tela de detalhes de uma série

- A tela deve exibir o nome, gênero, data de lançamento, sinopse e imagem da série.

- A tela deve fazer uma requisição à API para buscar os dados da série, em tempo de renderização no servidor.

- A tela deve ter um botão "Voltar". Esse botão deve redirecionar o usuário de volta para a listagem geral de séries.

- Se a série for favoritada, deve haver um texto "Série favorita" na tela.

## Bônus

### Back-end

#### 11 - Crie um endpoint para cadastar novas séries

- O endpoint deve receber o nome, gênero, sinopse, data de lançamento e imagem de uma série a cadastrá-la no banco.

- Ao receber um requisição, a API deve fazer as seguintes validações:

  - Nome, gênero, sinopse e data de lançamento estão presentes;

  - A data de lançamento possui um formato válido.

- A imagem recebida deve ser salva na pasta `public/images`.

- O endpoint deve aplicar a seguinte regra de negócio:

  - Se o gênero inserido for novo, ele deve ser criado no banco e ligado com a nova série;

  - Se o gênero já existir, um novo gênero não deve ser criado e a série deve ser ligada com o gênero existente.

#### 12 - Crie um endpoint para editar séries

- O endpont deve receber os mesmos dados do endpoint de criação, e atualizar os dados da série especificada.

- O endpoint deve aplicar a seguinte regra de negócio:

  - Se o gênero inserido for novo, ele deve ser criado no banco e ligado com a série especificada;

  - Se o gênero já existir, um novo gênero não deve ser criado e a série deve ser ligada com o gênero existente.

#### 13 - Use variáveis de ambiente nas credenciais do banco de dados

- Utilize variáveis de ambiente para armazenar suas credenciais de acesso. Como sugestão, utilize a biblioteca [dotenv](https://www.npmjs.com/package/dotenv).

- Seu arquivo `.env` deve estar presente no `.gitignore`.

- Descreva no README do projeto quais são as variáveis de ambiente utilizadas e como configurá-las.

### Front-end

#### 14 - Crie uma tela para cadastrar novas séries

- A tela deve apresentar um formulário para cadastar uma nova série, de forma semelhante à especificada no protótipo.

- Adicione um botão "Nova série" na página de listagem de séries que leva à página de criar nova série.

#### 15 - Crie uma tela para editar uma série

- A tela deve apresentar um formulário para editar uma nova série, de forma semelhante à especificada no protótipo. O formulário já deve vir preenchido com os dados da série.

- Adicione um botão "Editar" na página de detalhes de uma série que leva à página de edição de série.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone git@github.com:tryber/sd-01-project-tryflix.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-01-project-tryflix`

2. Instale as dependências do front-end e do back-end

- Instale as dependências do front-end e inicie o servidor
  - `cd front-end`
  - `npm install`
  - `npm run dev`
- Instale as dependências do back-end
  - `cd back-end`
  - `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-tryflix`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listado o arquivo alterado em vermelho)
- Adicione o arquivo alterado ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo adicionado em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto Tryflix'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-tryflix`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-01-project-tryflix/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-01-project-tryflix/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-01`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
