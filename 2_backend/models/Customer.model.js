const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
