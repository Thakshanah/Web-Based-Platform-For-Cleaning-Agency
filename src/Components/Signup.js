import React, { useState } from "react";
import Axios from "axios";
import "./Registration.css";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [addressReg, setAddressReg] = useState("");
  const [contactNoReg, setContactNoReg] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate first name
    if (firstnameReg.trim() === "") {
      newErrors.firstname = "First name is required";
      isValid = false;
    }

    // Validate last name
    if (lastnameReg.trim() === "") {
      newErrors.lastname = "Last name is required";
      isValid = false;
    }

    // Validate email
    if (emailReg.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailReg)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate address
    if (addressReg.trim() === "") {
      newErrors.address = "Address is required";
      isValid = false;
    }

    // Validate contact number
    if (contactNoReg.trim() === "") {
      newErrors.contactNo = "Contact number is required";
      isValid = false;
    } else if (!/^\d+$/.test(contactNoReg)) {
      newErrors.contactNo = "Invalid contact number";
      isValid = false;
    }

    // Validate username
    if (usernameReg.trim() === "") {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Validate password
    if (passwordReg.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const register = () => {
    if (validateForm()) {
      Axios.post("http://localhost:3000/register", {
        username: usernameReg,
        password: passwordReg,
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        address: addressReg,
        contactno: contactNoReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <div className="App">
      <div className="registration-container">
        <div className="registration-form">
          <h1>Registration</h1>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setFirstnameReg(e.target.value);
              }}
            />
            {errors.firstname && <span className="error">{errors.firstname}</span>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setLastnameReg(e.target.value);
              }}
            />
            {errors.lastname && <span className="error">{errors.lastname}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              onChange={(e)=> {
                setEmailReg(e.target.value);
                }}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                <label>Address</label>
                <input
                type="text"
                onChange={(e) => {
                setAddressReg(e.target.value);
                }}
                />
                {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="form-group">
                <label>Contact No</label>
                <input
                type="text"
                onChange={(e) => {
                setContactNoReg(e.target.value);
                }}
                />
                {errors.contactNo && <span className="error">{errors.contactNo}</span>}
                </div>
                <div className="form-group">
                <label>Username</label>
                <input
                type="text"
                onChange={(e) => {
                setUsernameReg(e.target.value);
                }}
                />
                {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div className="form-group">
                <label>Password</label>
                <input
                type="password"
                onChange={(e) => {
                setPasswordReg(e.target.value);
                }}
                />
                {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button className="register-button" onClick={register}>
                Register
                </button>
                
                </div>
                </div>
                </div>
                );
                }
