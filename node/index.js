const express = require('express');

const app = express();
const port = 8080;

// Permitir apenas o host que passa pelo nginx
    // Bloqueia o acesso direto 'http://localhost:81'
const allowedHost = 'localhost';

app.use((req, res, next) => {
    const requestHost = req.get('host');
    if ( requestHost !== allowedHost ){
        return res.status(403).send('Forbidden - Access not allowed');
    }
    next();
})

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>');
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
})

console.log('Opa testando');