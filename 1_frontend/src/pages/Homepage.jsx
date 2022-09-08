import { useState, useEffect } from 'react';
import EditButton from '../components/EditButton/EditButton';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import api from '../shared/api';
import { paginate } from '../hooks/pagination';
import {
  StyledHomepageLeft,
  StyledHomepageMain,
  StyledHomepageRight,
  StyledTable,
} from './Homepage.style';

const Homepage = () => {
  // STATES
  const [customers, setCustomers] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [page, setPage] = useState(1);

  // REFS

  // Side effects
  // --- Get customers array
  const getCustomers = async () => {
    const customersData = await api.getCustomers();
    setCustomers(customersData.data);
  };

  // Timeout for use effect so table refreshes after adding or deleting user
  useEffect(() => {
    setTimeout(getCustomers, 1000);
  }, [submit]);

  // Confirmation for deleting user
  const handleDelete = (id) => {
    let confirm = window.confirm('Ar tikrai norite ištrinti?');
    if (confirm) {
      api.deleteUser(id);
      setSubmit((prev) => !prev);
    }
  };

  // Sort customers by date
  const sortedCustomers = customers.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    return dateA - dateB;
  });

  // Customers array paginated from sorted array. 10 clients per page.
  const paginatedCustomers = paginate(sortedCustomers, 10, page);

  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center', padding: '0.5em' }}>
        Klientų administravimas
      </h1>
      <StyledHomepageMain>
        <StyledHomepageLeft>
          <h3>Registruoti naują klientą</h3>
          {/* Form for client registration */}
          <Form post={true}>
            <button onClick={() => setSubmit((prev) => !prev)}>
              Registruoti
            </button>
          </Form>
        </StyledHomepageLeft>
        <StyledHomepageRight>
          <h3>Užregistruoti klientai</h3>
          <StyledTable>
            <thead>
              <tr>
                <th>Vardas Pavardė</th>
                <th>El. Paštas</th>
                <th>Data</th>
                <th>Laikas</th>
              </tr>
            </thead>

            <tbody>
              {/* Creating each user record from paginated array */}
              {paginatedCustomers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.fullname}</td>
                  <td>{customer.email}</td>
                  <td>{customer.date.slice(0, 10)}</td>
                  <td>{customer.hour}</td>
                  <td>
                    {/* Edit button component which opens EditModal component for client editing */}
                    <EditButton customerId={customer._id} />
                    {/* Delete client from table. Includes confirmation. */}
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => handleDelete(customer._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
            {/* Go to previous page if available */}
            <button
              onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
              style={{ padding: '1px 10px' }}
              disabled={page === 1 ? true : false}
            >
              {'<'}
            </button>
            {/* Go to next page if available */}
            <button
              onClick={() => setPage((prev) => prev + 1)}
              style={{ padding: '1px 10px' }}
              disabled={paginatedCustomers.length < 10 ? true : false}
            >
              {'>'}
            </button>
            {/* Refresh after editing client */}
            <button onClick={() => setSubmit((prev) => !prev)}>
              Atnaujinti
            </button>
          </div>
        </StyledHomepageRight>
      </StyledHomepageMain>
    </>
  );
};

export default Homepage;
