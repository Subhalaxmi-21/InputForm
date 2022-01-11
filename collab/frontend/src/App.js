import  { useState } from 'react';
import './App.css';
// import Uploading from './components/Uploading';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Uploads from './components/Uploads';
// import Approval from './components/Approval';
// import Details from './components/Details';
// import Profile from './components/Profile';
// import Edit from './components/Edit';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className="App">
      <Button className='close' style={{position:'absolute', margin: "2rem",color:"white", right:'0'}} className='close' onClick={()=>{setOpen(false)}}><CloseIcon/></Button>
      <header className="App-header">
      {open && <Uploads/>}
      {/* <Approval/> */}
      {/* <Details/>
      <Profile/> */}
      </header>



      {/* <Router>
      <Routes>
      <Route path="/" element={<Profile/>} />
      <Route path="/:id" element={<Profile/>} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/approval" element={<Approval />} />
      <Route path="/edit" element={<Edit />} />
 */}




      {/* <Route path="/details2" element={<Details2 />} /> */}
      
      
      {/* <Route path="/register" element={<Registration />} /> */}
      {/* <Route path="/upload" element={<Uploads />} /> */}
      
      {/* <Route path="/collab" element={<Collab />} /> */}
      {/* <Route path='/' element={<Home/>} /> */}
      {/* <Route path='/about' element={<About/>} /> */}
      {/* <Route path='/contact' element={<Contact/>} />      */}
      {/* <Route path='/card' element={<Card/>} />   */}
      {/* <Route path='/uploads' element={<Uploads/>} />       */}
      {/* <Route path='/nav' element={<Nav/>} />       */}
      {/* <Route path='/project' element={<Projects/>} /> */}
    {/* </Routes>
  </Router> */}
    </div>
  );
}

export default App;
