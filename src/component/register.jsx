import React, { useState } from 'react';
import { Alert, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = ({ onAddUser }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '', // This will store the final DOB
    password: ''
  });
  const [englishDate, setEnglishDate] = useState(null);
  const [activeDateInput, setActiveDateInput] = useState(''); // Track which date input is active
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    onAddUser({ ...formData }); // Pass user data to parent
    setShowAlert(true);
  };

  const handleOkClick = () => {
    setShowAlert(false);
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNepaliDateChange = (nepaliDate) => {
    setEnglishDate(convertNepaliToEnglish(nepaliDate)); // Convert Nepali to English
    setFormData({ ...formData, dob: nepaliDate }); // Set DOB to Nepali
    setActiveDateInput('nepali'); // Mark that Nepali date input is active
  };

  const handleEnglishDateChange = (date) => {
    setEnglishDate(date);
    setFormData({ ...formData, dob: convertEnglishToNepali(date) }); // Set DOB to English
    setActiveDateInput('english'); // Mark that English date input is active
  };

  const convertNepaliToEnglish = (nepaliDate) => {
    // Implement your conversion logic here
    return new Date(); // Placeholder
  };

  const convertEnglishToNepali = (date) => {
    const englishDate = new Date(date);
    // Convert English date to Nepali
    return ''; // Implement your conversion logic here
  };

  return (
    <div className="container mt-5">
      {showAlert && (
        <Alert className="mt-3" color="success">
          Registered successfully!!!!
          <div className="mt-2">
            <Button color="primary" onClick={handleOkClick}>OK</Button>
          </div>
        </Alert>
      )}
      <div className='row'>
        <div className='col-3'>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input 
                type="text" 
                name="username" 
                className="form-control" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input 
                type="email" 
                name="email" 
                className="form-control" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <NepaliDatePicker
                inputClassName="form-control"
                value={formData.dob}
                onChange={handleNepaliDateChange}
                options={{ calenderLocale: "ne", valueLocale: "en" }}
              />
              <DatePicker
                selected={englishDate}
                onChange={handleEnglishDateChange}
                className="form-control mt-2"
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a date"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                name="password" 
                className="form-control" 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;