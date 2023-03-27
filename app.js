
const express = require('express')

const connectDB = require('./config/db');
const subscribersRouter = require('./routes/employees')
const app = express()

require('dotenv').config()

/* Body Parser
=========================== */
app.use(express.json())

/* Connecting to DB
=========================== */
connectDB();

app.use('/employees', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))