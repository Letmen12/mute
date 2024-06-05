const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const hotels = JSON.parse(fs.readFileSync('data/hotels.json', 'utf8'));

app.get('/hotels', (req, res) => {
  res.json(hotels);
});

app.get('/hotels/:name', (req, res) => {
  const hotelName = req.params.name;
  const hotel = hotels.find(h => h.name === hotelName);

  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).send('Hotel not found');
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
