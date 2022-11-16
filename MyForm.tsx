import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './formStyle.css';

export default function MyForm() {
  const initialVars = {
    fname: '',
    sname: '',
    lname: '',
    gender: '',
    email: '',
    phone: '',
  };

  const [formData, setformData] = useState(initialVars);
  const [formSuccess, setformSuccess] = useState('');
  const [formError, setformError] = useState([]);

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setformError([]);
    setformSuccess('');
  };

  const submitHelper = async (event) => {
    event.preventDefault();

    try {
      // await response;
      true;

      setformSuccess('Issa great success!!');

      setformData(initialVars);
    } catch (err) {
      handleErrors(err);
    }
  };

  const handleErrors = (err) => {
    if (err.response.data && err.response.data.errors) {
      const { errors } = err.response.data;
      let errorMsg = [];
      for (let error of errors) {
        const { msg } = error;
        errorMsg.push(msg);
      }
      setformError(errorMsg);
    } else {
      setformError(['Oops, there was an error']);
    }
  };

  function serverErrorHandler() {}

  return (
    <form className={'formContainer'}>
      <label>First Name</label>
      <input type="text"></input>
      <br />
      <label>Second Name</label>
      <input type="text"></input>
      <br />
      <label>Last Name</label>
      <input type="text"></input>
      <br />
      <label>Gender</label>
      <select>
        <option value="Male">Male</option>
        <option value="Female" defaultValue>
          Female
        </option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <br />
      <label>Phone number</label>
      <input type="tel"></input>
      <br />
      <label>Email Address</label>
      <input type="email"></input>
      <br /> <label>Password</label>
      <input type="password"></input>
      <input type="submit"></input>
      <input type="reset"></input>
    </form>
  );
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
