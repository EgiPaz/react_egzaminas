const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectMongoDB = require('./config/db.js');
const Customer = require('./models/Customer.model.js');

const app = express();
const PORT = process.env.PORT || 5001;

// Connecting MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// -- Get all customers
app.get('/api/customers', (req, res) => {
  res.json('Logic is not mplemented');
});
// -- Customer registration
app.post('/api/customers', (req, res) => {
  res.json('Logic is not mplemented');
});
// -- Update customer
app.put('/api/customers', (req, res) => {
  res.json('Logic is not mplemented');
});
// -- Update customer
app.delete('/api/customers', (req, res) => {
  res.json('Logic is not mplemented');
});
//

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
