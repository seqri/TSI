const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());

let data = [{ id: 1, name: "Первая запись" }];

app.get('/api/data', (req, res) => res.json(data));

app.post('/api/data', (req, res) => {
    const newItem = { id: Date.now(), name: req.body.name };
    data.push(newItem);
    res.status(201).json(newItem);
});

app.listen(5173, () => console.log('Server on port 5173'));
