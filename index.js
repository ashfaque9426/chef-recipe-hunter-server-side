const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const data = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('The Food Artisan server is running');
});

app.get('/chefData', (req, res) => {
    res.send(data);
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const recepes = data.find(chefData => chefData.id === id);
    res.send(recepes);
})

app.listen(port, () => {
    console.log(`The Food Artisan server is runnig on port: ${port}`)
});