import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const defaultFormFields = {
  username: '',
  password: '',
};

function UserForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', { username, password });
      console.log(response.data);
      // dispatch({ type: 'SET_CURRENT_USER', payload: { username: response.data.username, password: response.data.password } });
      dispatch({ type: 'SET_CURRENT_USER', payload: response.data });

      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
