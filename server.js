const express = require("express");
const app = express();
const moment = require('moment-timezone');
const PORT = 3000;
const TIMEZONE = 'America/Santiago';

app.use(express.json())

app.post('/', function (request, response) {
  try {
    let data = {};
    const body = request.body;
    const dates = body.dates;
    data.dates = new Array();
    dates.forEach(datestr => {
      data.dates.push(stringToDate(datestr).toString());
    });
    data.nowDate = (dateToTimezone(new Date(), TIMEZONE)).toUTCString();
    response.status(200).send({code: 200, resp: data});
  } catch (e) {
    response.status(500).send({code: 0, resp: e.message});
  }
});

function stringToDate(datestring) {
  let date = new Date(datestring);
  const timezoneServer = Number.parseInt(moment(date).format('Z'));
  date.setHours(date.getHours() + (timezoneServer * -1));
  return date;
}

function dateToTimezone (date, timezone) {
  const timezoneCL = Number.parseInt(moment(date).tz(timezone).format('Z'));
  const timezoneServer = Number.parseInt(moment(date).format('Z'));
  const timezoneApply = timezoneCL + (timezoneServer * -1);
  date.setHours(date.getHours() + (timezoneApply));
  return date;
}

app.get('/', (req, res) => {
  res.status(200).send({code: 200, resp: 'OK'});
})

app.listen(
  PORT, () => console.log(`Listening PORT ${PORT}`)
)