import { useState } from "react";
import "./form.css";

const Form = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const nameHandle = (e) => {
        setName(e.target.value);
    }

    const passwordHandle = (e) => {
        setPassword(e.target.value);
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log("form is called!!");
        e.preventDefault();
    }
    
    return (
    <div style={{ fontSize: "25px" }}>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" value={name} required onChange={nameHandle} />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" value={password} required onChange={passwordHandle}/>
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" value={email} required onChange={emailHandle}/>
        <br />
        <button type="submit" style={{ fontSize: "20px", marginTop: "16px" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
