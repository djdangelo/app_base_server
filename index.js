require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./database/config');

const cors = require('cors');

const app = express();

app.set('port', process.env.PORT);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(`${ process.env.GLOBAL_ROUTE }EXAMPLE`, require('./routes/route'));
app.use('/*', async (req, res) => {
    return sharedFunctions.messageNotAuthUser(res, 'You are not allowed this action.', []);
});

app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});