const express = require('express');
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
});

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
};

  app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});