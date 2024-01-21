const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Fullcycle</h1>');
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
})

console.log('Opa testando');