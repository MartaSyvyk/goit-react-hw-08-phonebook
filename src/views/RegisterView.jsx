import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth_operations';

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(operations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Email must have @ symbol"
          required
        />
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          pattern=".{8,}"
          title="Password must be eight or more characters"
          required
        />
      </label>
      <button type="submit">Create user</button>
    </form>
  );
}

export default Register;
