import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyCollapse from './component/collapse';
import NavBar from './component/navBar';
import ThemeToggle from './component/toggledemo';
import ArrayDemo from './component/arrayDemo';
import Login from './component/login';
import Register from './component/register';
import UserData from './component/UserData';
import NepaliDatePickerComponent from './component/ndatePicker';
import SpanTable from './component/tableDemo';
import FlexboxLayout from './layoutmagt/flexboxDemo';
import GridLayout from './layoutmagt/gridDemo';
import MaterialUILayout from './layoutmagt/materialUiDemo';
import BasicRating from './layoutmagt/materialUiDemo';
import DataTable from './component/tableDemo';
import Home from './component/Home';
import Slideshow from './component/slide';


function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const handleAddUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to localStorage
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update localStorage
  };

  return (
    <>
      <Router>
        <NavBar />
       
        <Routes>
          <Route path="/toggledemo" element={<ThemeToggle />} />
          <Route path="/Collapse" element={<MyCollapse />} />
          <Route path="/arrayDemo" element={<ArrayDemo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register onAddUser={handleAddUser} />} />
          <Route path="/user-data" element={<UserData users={users} onDeleteUser={handleDeleteUser} />} />

          <Route path="/" element={<Register onAddUser={handleAddUser} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ndatePicker" element={<NepaliDatePickerComponent />} />


          
        </Routes>
      </Router>
      {/* <New /> */}

      {/* Uncomment any additional components you want to display */}
      
      {/* <SpanTable/> */}
      {/* <FlexboxLayout /> */}
      {/* <GridLayout /> */}
      {/* <BasicRating /> */}
      {/* <DataTable /> */}
      {/* <Home /> */}
      {/* <Slideshow /> */}
    </>
  );
}

export default App;