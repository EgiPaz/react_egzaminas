import axios from 'axios';

const HOST = 'http://localhost:5001';

class API {
  async getCustomers() {
    const customers = await axios.get(HOST + '/customers');

    return customers;
  }

  async addCustomer(customerData) {
    const { customerData } = await axios.post(HOST + '/customers', userData);

    return data;
  }
}

const api = new API();

export default api;
