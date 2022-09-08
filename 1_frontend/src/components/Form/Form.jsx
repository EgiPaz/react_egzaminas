import { useState, useEffect, useRef } from 'react';
import api from '../../shared/api';
import { StyledForm } from './Form.style';
import FormInput from './FormInput/FormInput';

const Form = ({ children, post, put, customerId }) => {
  // STATES
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [customers, setCustomers] = useState([]);
  const [customerIdProp, setCustomerIdProp] = useState(customerId);
  const [isPost, setIsPost] = useState(post);
  const [isPut, setIsPut] = useState(put);
  const [formValidationsMessages, setFormValidationsMessages] = useState({
    name: '',
    email: '',
    date: '',
  });
  const [customersOnLoad, setCustomersOnLoad] = useState(true);

  //   REFS
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const dateInputRef = useRef();
  const initialSubmit = useRef(true);

  // Side Effects
  // --- Get customers array
  const getCustomers = async () => {
    const customersData = await api.getCustomers();
    setCustomers(customersData.data);
  };

  useEffect(() => {
    // Getting customers on load for date comparison
    if (customersOnLoad) {
      getCustomers();
      setCustomersOnLoad(false);
    }

    if (!initialSubmit.current) {
      validateInputs(name, email, date);
    }
  }, [name, email, date]);

  const validateInputs = (name, email, date) => {
    let isNameValid;
    let isEmailValid;
    let isDateValid;
    let isHourValid;
    let isMinuteValid;
    let isAvailable = true;

    // Array for date availablity comparison
    const customerDates = [];
    customers.forEach((customer) => customerDates.push(customer.date));

    // For getting hours and minutes
    const checkDate = new Date(date);
    const dateHours = checkDate.getHours();
    const dateMinutes = checkDate.getMinutes();

    if (!name.includes(' ')) {
      // Name must include space in order to enter surname
      nameInputRef.current.style.borderColor = 'red';

      isNameValid = false;
    } else {
      nameInputRef.current.style.borderColor = 'green';

      isNameValid = true;
    }
    // Email validation
    if (!email.includes('@')) {
      // Basic email checking if there's an "@" sign
      emailInputRef.current.style.borderColor = 'red';
      isEmailValid = false;
    } else {
      emailInputRef.current.style.borderColor = 'green';
      isEmailValid = true;
    }

    if (date.length === 0) {
      // Checking if any date is selected
      dateInputRef.current.style.borderColor = 'red';
      isDateValid = false;
    } else if (dateHours > 16 || dateHours < 8) {
      // Checking if working hours are selected: from 8 to 17

      dateInputRef.current.style.borderColor = 'red';
      isHourValid = false;
    } else if (dateMinutes !== 30 && dateMinutes !== 0) {
      // Checking if selected minutes are 0 or 30
      dateInputRef.current.style.borderColor = 'red';
      isMinuteValid = false;
    } else if (customerDates.includes(date)) {
      // Checking if date is already registrated
      dateInputRef.current.style.borderColor = 'red';
      isAvailable = false;
    } else {
      dateInputRef.current.style.borderColor = 'green';
      isDateValid = true;
      isHourValid = true;
      isMinuteValid = true;
      isAvailable = true;
    }

    setFormValidationsMessages({
      name: isNameValid ? '' : 'Irašyti pavardę',
      email: isEmailValid ? '' : 'Įrašyti El. Paštą',
      date: isDateValid
        ? ''
        : isHourValid
        ? ''
        : isMinuteValid
        ? ''
        : !isAvailable
        ? 'Pasirinktas laikas jau užimtas'
        : 'Darbo laikas: 08-17, registruoti 30 min. intervalais **:00 arba **:30',
    });

    return isDateValid &&
      isHourValid &&
      isMinuteValid &&
      isNameValid &&
      isEmailValid &&
      isAvailable
      ? true
      : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInputsValid = validateInputs(name, email, date);
    initialSubmit.current = false;

    if (!isInputsValid) {
      return;
    }
    // slicing date to get hours
    const shortHour = date.slice(11, 18);

    const newCustomerData = {
      fullname: name,
      email: email,
      date: date,
      hour: shortHour,
    };

    // Checking if it's post or update form
    if (isPost) {
      api.addCustomers(newCustomerData);
    }
    if (isPut) {
      api.updateCustomer(customerIdProp, newCustomerData);
    }
    // Updating customers after adding new one
    setTimeout(getCustomers, 1000);
    // Reset form
    setName('');
    setEmail('');
    setDate('');

    initialSubmit.current = true;
    emailInputRef.current.style.borderColor = '#ccc';
    nameInputRef.current.style.borderColor = '#ccc';
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput
        name="fullname"
        id="fullname"
        text="Vardas Pavardė"
        type="text"
        value={name}
        change={setName}
        ref={nameInputRef}
        helperText={formValidationsMessages.name}
      />
      <FormInput
        name="email"
        id="email"
        text="El. Paštas"
        type="text"
        value={email}
        change={setEmail}
        ref={emailInputRef}
        helperText={formValidationsMessages.email}
      />
      <FormInput
        name="date"
        id="date"
        text="Data"
        type="datetime-local"
        value={date}
        change={setDate}
        ref={dateInputRef}
        helperText={formValidationsMessages.date}
      />

      {/* Render Button from children prop */}
      {children}
    </StyledForm>
  );
};

export default Form;
