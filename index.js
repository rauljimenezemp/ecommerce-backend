const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Hola!');
});

app.listen(PORT, () =>
  console.log('Servidor corriendo en http://localhost:' + PORT)
);
