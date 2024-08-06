// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
