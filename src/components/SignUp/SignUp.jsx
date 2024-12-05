import React from "react";
import "./SignUp.css";
function SignUp() {

    const [formData, setFormData] = React.useState({
      fullName: "",
      userName: "",
      email: "",
      address: "",
      phone: ""
    });

    function handleChange(e){
        const {id, value} = e.target;
        setFormData((prevState) =>{
            return {...prevState, [id]: value};
        });
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log(formData);
    }

  return (
    <div className="container">
      <h1>Sign Up Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Enter your full name</label>
        <input
          type="text"
          className="textInput"
          id="fullName"
          placeholder="Ex. Jon Doe"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label htmlFor="userName">Enter your desired username</label>
        <input
          type="text"
          className="textInput"
          id="userName"
          placeholder="JDoe1995"
          value={formData.userName}
          onChange={handleChange}
        />
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          className="textInput"
          id="email"
          placeholder="JohnDoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="address">Enter your address</label>
        <input
          type="text"
          className="textInput"
          id="address"
          placeholder="1234 Elm St, Springfield, IL 62701"
          value={formData.address}
          onChange={handleChange}
        />
        <label htmlFor="phone">Enter your phone number</label>
        <input
          type="tel"
          className="textInput"
          id="phone"
          placeholder="123-456-7890"
          value={formData.phone}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;