const express = require('express');
const mysql = require('mysql');


const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if(err) throw err;
    console.log('Database Connected!')
})

// Permitir apenas o host que passa pelo nginx
// Bloqueia o acesso direto 'http://localhost:81'
const allowedHost = 'localhost';

const app = express();
const port = 8080;

app.use((req, res, next) => {
    const requestHost = req.get('host');
    if ( requestHost !== allowedHost ){
        return res.status(403).send('Forbidden - Access not allowed');
    }
    next();
})



app.get('/', (_req, res) => {
    let response = '';
    let tableExists = connection.query('SHOW TABLES LIKE "people"', (error, results) => {
        if(error) return console.log(error);
        if(results.length === 0) return false;
        return true;
    });
    if(!tableExists){
        connection.query('CREATE TABLE people(name VARCHAR(250))');
    }

    connection.query(`INSERT INTO people(name) values('Catarina')`);
    connection.query(`INSERT INTO people(name) values('Bruna')`);
    response += '<h1>Full Cycle Rocks!</h1>\n';
    response += '<ul>\n';

    // Query the "people" table
    const queryPromise = () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM people`, (err, rows, _fields) => {
                if (err) {
                    reject(err);
                } else {
                    rows.forEach((row) => {
                        response += `<li>${row.name}</li>`;
                    });
                    resolve();
                }
            });
        });
    };

    // Delete data from the "people" table
    const deletePromise = () => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM people`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    };

    // Execute the promises sequentially
    queryPromise()
        .then(deletePromise)
        .then(() => {
            response += '</ul>\n';
            res.send(response);
        })
        .catch((err) => {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        });
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
})
