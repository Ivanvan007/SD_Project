const express = require('express');
const app = express();
const axios = require('axios');
const DB = require(DB);

// Server on port 3000
app.get('/', (req, res) => {
    res.send('Server 3000');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Server on port 3010
app.get('/', (req, res) => {
    res.send('Server 3010');
});

app.listen(3010, () => {
    console.log('Server running on port 3010');
});

// Router server on port 4000
app.get('/', (req, res) => {
    res.send('Router Server');
});

app.listen(4000, () => {
    console.log('Router server running on port 4000');
});

// Route requests
app.get('/data', (req, res) => {
    const id = req.query.id;
    if (id === 'id1') {
        axios.get('http://localhost:3000/getData')
            .then(response => res.send(response.data))
            .catch(error => res.status(500).send('Error communicating with server on port 3000'));
    } else if (id === 'id2') {
        axios.get('http://localhost:3010/getData')
            .then(response => res.send(response.data))
            .catch(error => res.status(500).send('Error communicating with server on port 3010'));
    } else {
        res.status(400).send('Invalid ID');
    }
});

// Data endpoint for server on port 3000
app.get('/getData', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:4000/data?id=id1');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error communicating with router server on port 4000');
    }
});

// Data endpoint for server on port 3010
app.get('/getData', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:4000/data?id=id2');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error communicating with router server on port 4000');
    }
});