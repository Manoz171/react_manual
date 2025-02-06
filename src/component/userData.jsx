import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function UserData({ users, onDeleteUser }) {
  const [modal, setModal] = useState(false);
  const [userIndex, setUserIndex] = useState(null);
  const navigate = useNavigate();

  const toggleModal = () => setModal(!modal);

  const handleDeleteClick = (index) => {
    setUserIndex(index);
    toggleModal();
  };

  const confirmDelete = () => {
    if (userIndex !== null) {
      onDeleteUser(userIndex);
      setUserIndex(null); // Reset userIndex after deletion
      toggleModal(); // Close the modal
      navigate("/user-data"); // Redirect to the same page to refresh
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Data</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.password}</td>
                <td>
                  <Button color="danger" onClick={() => handleDeleteClick(index)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Confirmation Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Deletion</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this user?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>Delete</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UserData;