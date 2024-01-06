import { useState } from "react"

const Form = () => {

    const [form, setForm] = useState({
        fName: "",
        lName: "",
        city: "",
        gender: "Male"

    });
  return (
    <div className="container">
        <form action="">
            <input value={form.fName} placeholder="First Name"/> <br />
            <input value={form.lName} placeholder="First Name" /> <br />
            <select value={form.city}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
            </select>
            <br />
            <input checked={form.gender === "Male"} type="radio" name="gender"/>Male
            <input checked={form.gender === "Female"} type="radio" name="gender"/>Female
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form