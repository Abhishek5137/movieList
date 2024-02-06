import React, { useState } from 'react';
import './RegistrationForm.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <> <div className="maincont">
 <div className="container">
    <h3>Please fill the details</h3>
    <form onSubmit={handleSubmit}>
      <div className='email'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='jon123@gmail.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='password'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='abcd@1234'
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
    </div>
    </>
  );
}

export default RegistrationForm;
