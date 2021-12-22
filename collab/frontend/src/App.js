import  { useState } from 'react';
import './App.css';
// import Uploading from './components/Uploading';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Uploads from './components/Uploads';


function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className="App">
      <Button className='close' style={{position:'absolute', margin: "2rem",color:"white", right:'0'}} className='close' onClick={()=>{setOpen(false)}}><CloseIcon/></Button>
      <header className="App-header">
      {open && <Uploads/>}
      
      </header>
    </div>
  );
}

export default App;
