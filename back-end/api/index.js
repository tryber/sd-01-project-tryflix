const app = require('./server');

const port = process.env.PORTBACK || 3001;

app.factory().listen(port, () => {
  console.log(`Conectado na porta localhost//:3000/${port}`);
});
