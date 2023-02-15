import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth_operations';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(operations.login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
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
        <button type="submit">Login </button>
      </form>
    </div>
  );
}

export default Login;
