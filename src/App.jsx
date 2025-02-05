import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import MyCollapse from './component/collapse';
import { Navbar } from 'reactstrap';
import NavBar from './component/navBar';
import ThemeToggle from './component/toggledemo';
import ArrayDemo from './component/arrayDemo';
import Login from './component/login';
import Register from './component/register';
import UserData from './component/UserData';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
      <NavBar />
      <Routes>
        <Route path="/toggledemo" element={<ThemeToggle />} />
        <Route path="/Collapse" element={<MyCollapse />} />
        <Route path="/arrayDemo" element={<ArrayDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userData" element={<UserData />} />
      </Routes>
    </Router>
    

    {/* <NepaliDatePickerComponent /> */}
    

    

   
      
    </>
  )
}

export default App
