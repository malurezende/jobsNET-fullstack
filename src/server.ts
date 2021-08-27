import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import routes from './routes';
const cors = require('cors');

import './database';

dotenv.config();

const app = express();

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('server started on port 3333');
});