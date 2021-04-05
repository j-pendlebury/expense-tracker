const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const payments = require('./routes/payments');
const history = require('./routes/history');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'});
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())
app.use('/api/v1/payments', payments);
app.use('/api/v1/history', history);

app.listen(PORT, console.log(`Server running on ${PORT}`));
