const express = require('express');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../_dist'));
app.use(express.json());

app.post('/api/validate-card', async(req, res) => {
  try {
    const response = {};
    response.data = await new Promise(resolve => {
      setTimeout(() => resolve(), 3000);
    });

    res.send({
      success: Math.random() >= 0.2
    });
  } catch (error) {
    res.status(500);
    res.send('error', { error });
  }
});

app.post('/api/validate-card-pin', async(req, res) => {
  try {
    const response = {};
    response.data = await new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });

    res.send({
      success: req.body.pin === true
    });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
});

app.post('/api/check-balance', async(req, res) => {
  try {
    const response = {};
    response.data = await new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });

    res.send({
      success: req.body.amount < 70
    });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
});

app.listen(port, () => console.log(`Server running on port:  ${ port }`));
