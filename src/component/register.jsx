import React, { useState } from 'react';
import { Alert, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function Register() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleRegister = (e) => {
    e.preventDefault();
    setShowAlert(true); // Show alert on Register button click
  };

  const handleOkClick = () => {
    setShowAlert(false); // Hide alert
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      {/* Alert Message */}
      {showAlert && (
        <Alert  className="mt-3 ">
          Register successfully!!!!
          <div className="mt-2">
            <Button color="primary" onClick={handleOkClick}>OK</Button>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default Register;
