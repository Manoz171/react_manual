import React from 'react';
import { Table } from 'reactstrap';


function UserData() {
    const userData = [];
  return (
    <div className="container mt-5">
      <h2>Registered Users</h2>
      <Table bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>S.N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr><td colSpan="4" className="text-center">No users registered</td></tr>
          ) : (
            userData.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserData;
