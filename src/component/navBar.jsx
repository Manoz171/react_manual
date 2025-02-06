import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import logo1 from '../assets/logo1.png';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  const handleLogout = () => {
    console.log("User logged out");
    
    // Here you can also clear user data from localStorage if needed
    localStorage.removeItem('users'); // Optional: Remove user data on logout
    
    setModal(false); 
    navigate("/login"); 
  };

  return (
    <>
      <Navbar {...args} expand="md" className="shadow-sm">
      <Navbar>
      <NavbarBrand href="/">
        <img src={logo1} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        Nepal Donate.com
      </NavbarBrand>
    </Navbar>

        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/Home">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/user-data">User Data</Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/ndatePicker">Nepali date</Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/toggledemo">Toggle</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>More</DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link className='nav-link text-blue-700' to="/collapse">Collapse</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className='nav-link text-blue-700' to="/arrayDemo">CardDemo in array</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={toggleModal}>LogOut</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="d-flex align-items-center gap-3">
            <Button color="primary" size="sm" onClick={() => navigate("/login")}>LogIn</Button>
            <Button color="primary" size="sm" onClick={() => navigate("/register")}>Register</Button>
          </NavbarText>
        </Collapse>
      </Navbar>

      {/* Logout Confirmation Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Logout</ModalHeader>
        <ModalBody>Are you sure you want to log out?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleLogout}>Yes, Logout</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default NavBar;