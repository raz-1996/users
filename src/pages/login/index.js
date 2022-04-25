import React, { useState } from 'react';
import authService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const requiredValues = ['email', 'password'];

  function handleChange(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSignUpClick(e) {
    e.preventDefault()
      navigate("/authentication/sign-up")
  }

  function handleSubmit(event) {

    const isFilled = requiredValues.every(item => form[item])

    if (isFilled) {
      event.preventDefault();
      fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
        .then(response => {
          if (response.ok) {
            authService.isAuth = true;
            navigate('/home')
          } else {
            return Promise.reject(response)
          }
        }).catch(response => {
          response.json().then(error => {
            alert(error)
          })
        })
    };
  }

  return (
    <section className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="authentication-page-title">Welcom</h2>
        <fieldset className="form-fields-container" >
          <legend className="authentication-action-type">Login</legend>
          <ul className="fields-list">
            <li className="fields-list-item">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name='email'
                onChange={handleChange}
                required
              />
            </li>
            <li className="fields-list-item">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name='password'
                onChange={handleChange}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button
          className="authentication-action-buttons"
          name='login'>
          Login
        </button>
        <button
          className="authentication-action-buttons"
          name='signUp'
          onClick={handleSignUpClick} >
          SignUp
        </button>

      </form>


    </section>
  );
};
export default Login;