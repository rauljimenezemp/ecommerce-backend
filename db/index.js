require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.MONGODB_DATABASE_USERNAME}:${process.env.MONGODB_DATABASE_PASSWORD}@${process.env.MONGODB_DATABASE_HOSTNAME}/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`

mongoose
  .connect(connectionString)
    .then(() => console.log('conectado a la base de datos'))
    .catch(err => console.log('error conectado', err.message));
