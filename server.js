const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json())

app.post('/', function (request, response) {
  try {
    let data = {};
    const body = request.body;
    console.log(body)
    const dates = body.dates;
    console.log(dates);
    console.log(JSON.stringify(dates));
    data.dates = dates;
    data.nowDate = new Date();
    response.status(200).send({code: 200, resp: data});
  } catch (e) {
    response.status(500).send({code: 0, resp: e.message});
  }
});

app.get('/', (req, res) => {
  res.status(200).send({code: 200, resp: 'OK'});
})

app.listen(
  PORT, () => console.log(`Listening PORT ${PORT}`)
)