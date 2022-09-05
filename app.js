const express = require('express');
const morgan = require('morgan');
const error = require('./middlewares/error');

const userRoute = require('./routes/userRoutes');
const accountRoute = require('./routes/accountRoutes');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/account', accountRoute);

app.use(error);

module.exports = app;
