import express from "express";
import mysql from "mysql";
import { readFile } from 'fs/promises';

const app = express();
const port = 4000;

// mysql connection details
const mysqlConfig = JSON.parse(await readFile(new URL('../mysqlConfig.json', import.meta.url)));
const connection = mysql.createConnection({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
});

// connect to mysql server
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
});

// get request
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

// begin listening to queries on specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
