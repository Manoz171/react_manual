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
import NepaliDatePickerComponent from './component/ndatePicker';
import SpanTable from './component/tableDemo';

import FlexboxLayout from './layoutmagt/flexboxDemo';
import GridLayout from './layoutmagt/gridDemo';
import MaterialUILayout from './layoutmagt/materialUiDemo';
import BasicRating from './layoutmagt/materialUiDemo';
import DataTable from './component/tableDemo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Router>
      <NavBar />
      <Routes>
        <Route path="/toggledemo" element={<ThemeToggle />} />
        <Route path="/Collapse" element={<MyCollapse />} />
        <Route path="/arrayDemo" element={<ArrayDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userData" element={<UserData />} />
      </Routes>
    </Router> */}
    

   {/* <NepaliDatePickerComponent/> */}

   {/* <SpanTable/> */}

   {/* <FlexboxLayout /> */}

   {/* <GridLayout /> */}

   {/* <BasicRating /> */}

   <DataTable />
    

    

   
      
    </>
  )
}

export default App
