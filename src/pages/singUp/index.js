import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const requiredValues = ['name', 'age', 'email', 'password'];

const SignUp = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState({ age: '' })

    function onSignUpClick(event) {
        event.preventDefault()
        navigate("/authentication/login")
    }

    function handleChange(event) {
        const { value, name } = event.target

        if (name === "age" && (+value < 0 || +value > 120)) {
            return
        }

        setForm({ ...form, [name]: value })
    }

    function handleClickButton(event) {
        event.preventDefault();
        const isFilled = requiredValues.every(item => form[item])
        if (isFilled) {
            fetch('https://api-nodejs-todolist.herokuapp.com/user/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
                .then(response => {
                    if (response.ok) {

                        navigate("/authentication/login")
                    }
                })
        }
    }

    return (
        <section className="container">
            <form className="login-form">
                <h2 className="authentication-page-title">Sign Up!</h2>
                <fieldset className="form-fields-container">
                    <legend className="authentication-action-type">Create Account</legend>
                    <ul className="fields-list">
                        <li className="fields-list-item">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name='name' onChange={handleChange} />
                        </li>
                        <li className="fields-list-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name='email' onChange={handleChange} />
                        </li>
                        <li className="fields-list-item">
                            <label htmlFor="age">Age:</label>
                            <input type="number" id="age" name='age' value={form.age} onChange={handleChange} />
                        </li>
                        <li className="fields-list-item">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name='password' onChange={handleChange} />
                        </li>

                    </ul>
                </fieldset>
                <button className="authentication-action-buttons" onClick={handleClickButton}>Submit</button>
                <button type="button" className="authentication-action-buttons" onClick={onSignUpClick}>Have an Account?</button>
            </form>
        </section>
    );
};

export default SignUp;