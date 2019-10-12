import React, { useContext, useState } from "react"
import { FirebaseContext } from "../components/Firebase"

import "./login.scss";

const Login = () => {
  const [ formValues, setFormValues ] = useState({ email: '', password: '' });
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.login({ email: formValues.email, password: formValues.password });
  }

  const handleInputChange = (e) => {
    e.persist();

    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name] : e.target.value
    }))
  }

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <input value={formValues.email} name="email" onChange={handleInputChange} placeholder="email" type="email"/>
        <input value={formValues.password} name="password" onChange={handleInputChange} placeholder="password" type="password"/>    
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login