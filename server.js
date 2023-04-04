const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json())

app.post('/', function (request, response) {
  try {
    let data = {};
    const body = request.body;
    const dates = body.dates;
    data.dates = new Array();
    dates.forEach(datestr => {
      console.log(stringToDate(datestr));
      data.dates.push(stringToDate(datestr).toString());
    });


    
    data.nowDate = (new Date()).toString();
    response.status(200).send({code: 200, resp: data});
  } catch (e) {
    response.status(500).send({code: 0, resp: e.message});
  }
});

function stringToDate(datestring) {
  let date = new Date(datestring);
  return date;
}

app.get('/', (req, res) => {
  res.status(200).send({code: 200, resp: 'OK'});
})

app.listen(
  PORT, () => console.log(`Listening PORT ${PORT}`)
)