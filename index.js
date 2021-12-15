const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send({ message: 'Hola!'});
});

app.use('/api/v1', routes)





app.listen(PORT, () =>
  console.log('Servidor corriendo en http://localhost:' + PORT)
);
