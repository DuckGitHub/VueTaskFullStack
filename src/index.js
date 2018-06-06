const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
        .then( db => console.log('Bases de datos conectada'))
        .catch(err => console.error(err));

// Setings
app.set('port', process.env.PORT || 3000);

// Middlewares procesan antes de entrar a la url
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks')); // todas las rutas empiezan con /tasks

// Static Files
app.use(express.static(__dirname+'/public'))

// Server is listening
app.listen(3000, () => {
  console.log(`server on port ${app.get('port')}`);
})
