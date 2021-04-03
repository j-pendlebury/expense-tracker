const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const payments = require('./routes/payments');
const history = require('./routes/history');
const connectDB = require('./config/db')

const app = express();
app.use(express.json())

dotenv.config({ path: './config/config.env'});
connectDB();
app.use('/api/v1/payments', payments);
app.use('/api/v1/history', history);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on ${PORT}`));

