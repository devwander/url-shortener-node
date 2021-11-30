import express from 'express'
import dotenv from 'dotenv';
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection';

dotenv.config();

let port = process.env.SERVER_PORT;

const app = express()
app.use(express.json())

const database = new MongoConnection();
database.connect();

const urlController = new URLController()

app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(port, () => {
    console.log(`Server is runnig! Port: ${port}`);
})