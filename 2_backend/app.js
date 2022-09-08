const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectMongoDB = require('./config/db.js');
const Customer = require('./models/Customer.model.js');

const app = express();
const PORT = process.env.PORT || 5002;

// Connecting MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// -- Get all customers
app.get('/api/customers', async (req, res) => {
  const customers = await Customer.find();
  if (customers) {
    res.status(200).json(customers);
  } else {
    res.status(404).send('Customers not found');
    throw new Error('Customers not found');
  }
});
// -- Customer registration
app.post('/api/customers', async (req, res) => {
  try {
    const newCustomerData = req.body;

    const validatedCustomer = new Customer(newCustomerData);
    const newCustomer = await validatedCustomer.save();

    if (!newCustomer) res.status(400).json({ message: 'Customer not created' });

    res.json({ message: 'Customer created' });
  } catch (error) {
    console.log(error);
  }
});
// -- Update customer
app.put('/api/customers/:id', async (req, res) => {
  try {
    const customerId = req.params.id;
    const updatedCustomerData = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      updatedCustomerData
    );

    if (!updatedCustomer)
      res.status(400).json({ message: 'Customer not updated' });

    res.json(updatedCustomer);
  } catch (error) {
    console.log(error);
  }
});
// -- Delete customer
app.delete('/api/customers/:id', async (req, res) => {
  try {
    const customerId = req.params.id;
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer)
      res.status(400).json({ message: 'Customer not deleted' });

    res.json({ message: 'Customer deleted' });
  } catch (error) {
    console.log(error);
  }
});
//

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
