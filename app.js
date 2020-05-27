const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.options('*', cors());


app.get('/', (req, res) => {
  console.log('responding to request...')
  axios.get('https://pow.market/api')
    .then((data) => {
      console.log('API data successfully relayed!', console.log(Object.keys(data.data)));
      res.send(data.data);
    })
    .catch((error) => {
      res.send(error);
    })
});

app.listen(80, () => {
  console.log('listening...');
});