import { useState } from "react";
// in order to identify each field we use that name thing on the input tag.
// we use value property to controll the input tag so that we can change the state of that element.

const Form = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "Male"
  });

 

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(event.target.name);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    alert(JSON.stringify(form));
  };

  return (
    <div className="container">
      <form action="" onSubmit={submitForm}>
        <input
          onChange={handleChange}
          value={form.fName}
          placeholder="First Name"
          name="fName"
        />
        <br />
        <input
          onChange={handleChange}
          value={form.lName}
          placeholder="Last Name"
          name="lName"
        />
        <br />
        <select 
        value={form.city} 
        onChange={handleChange} name="city">
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input
          onChange={handleChange}
          checked={form.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={handleChange}
          checked={form.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
