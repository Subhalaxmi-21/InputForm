import  { useEffect, useState } from 'react';
import './App.css';
// import Uploading from './components/Uploading';
import CloseIcon from '@mui/icons-material/Close';
import { appBarClasses, Button } from '@mui/material';
import Uploads from './components/Uploads';
import axios from "axios";
import Register from './components/Register';
import Registration from './components/Registration';
import Login from './components/Login';
// import Approval from './components/Approval';
// import Details from './components/Details';
// import Profile from './components/Profile';
// import Edit from './components/Edit';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [src, setSrc] = useState('')
  // useEffect(() => {
    
  //   axios.get('http://localhost:3001/posts').then(res=>{
  //     console.log("In axios",res.data[0].img)
  //     setSrc('http://localhost:3001/'+res.data[0].img)
  //     console.log(src)
  //   })
  // }, [])
  const [open, setOpen] = useState(true)
  return (
    <div className="App">
      <Button className='close' style={{position:'absolute', margin: "2rem",color:"white", right:'0'}} className='close' onClick={()=>{setOpen(false)}}><CloseIcon/></Button>
      <header className="App-header">
      {/* {open && <Uploads/>} */}
      <Registration/>
      <Login/>
      {/* <img src={src} style={{width:'80%'}}></img> */}
      {/* <Register/> */}
      {/* <Approval/> */}
      {/* <Details/>
      <Profile/> */}
      </header>

      <h1>
        
      </h1>

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
