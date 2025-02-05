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

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  const handleLogout = () => {
    console.log("User logged out");
    
    setModal(false); 
     navigate("/login"); 

  };

  return (
    <>
      <Navbar {...args} expand="md" className="shadow-sm">
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>

          <NavItem>
              <Link className="nav-link" to="/toggledemo">Home</Link>
            </NavItem>

          <NavItem>
              <Link className="nav-link" to="/userData">User Data</Link>
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
