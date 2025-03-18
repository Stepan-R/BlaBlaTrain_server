require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.js');
const tripsRoute = require('./routes/trips.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/trips', tripsRoute);

mongoose.connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connecting to bd and running...')
    });
  })
  .catch((error) => {
    console.log(error);
  })