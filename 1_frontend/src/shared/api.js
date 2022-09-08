import axios from 'axios';

const HOST = 'http://localhost:5002';

class API {
  async getCustomers() {
    const customers = await axios.get(HOST + '/api/customers');

    return customers;
  }

  async addCustomers(customerData) {
    const { newCustomer } = await axios.post(
      HOST + '/api/customers',
      customerData
    );

    return newCustomer;
  }

  async updateCustomer(customerId, customerData) {
    try {
      const { updatedCustomer } = await axios.put(
        HOST + `/api/customers/${customerId}`,
        customerData
      );

      return updatedCustomer;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(userId) {
    const { data } = await axios.delete(HOST + `/api/customers/${userId}`);

    return data;
  }
}

const api = new API();

export default api;
