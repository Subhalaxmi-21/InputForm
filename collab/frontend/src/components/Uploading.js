import React,{useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import '../App.css'
import IconButton from '@mui/material/IconButton';
import { Card, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Stack from '@mui/material/Stack';
import axios from "axios";
const Input = styled('input')({
  display: 'none',
});


function Uploads() {

const [firstName, setFirstName] = useState('');
  const [git, setGit] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [base, setBase] = useState(null)
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleReader = readerEvt => {
    let binaryString = readerEvt.target.result
    setBase(btoa(binaryString))
  }

  const handleDemo =e=>{
    setSelectedImage(e.target.files[0])
    

  }

  const handleSubmit = e => {
    e.preventDefault();
    
    if(selectedImage){
      const reader = new FileReader();
      reader.onload   = handleReader.bind(this);
      reader.readAsBinaryString(selectedImage)
    }
console.log(firstName, git, desc, selectedImage, base);

    let payload= {image: base}
    const data = {
      name: firstName,
      git_repo: git,
      description:desc,
      // img:JSON.stringify(payload)
      
      img:JSON.stringify(payload)
    }
    axios.post('http://localhost:3001/posts',data).then(res=>console.log(res)).catch(err=>console.log(err))
  };
    return (
    
      <Card style={{padding:"2rem"}}>  
    <form  onSubmit={handleSubmit}> 
     
    <Box className='forms' >
      <TextField
        label="Full Name"
        variant="filled"
        required
        className='texts'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <TextField
        label="Git Repo"
        variant="filled"
        required
        className='texts'
        value={git}
        onChange={e => setGit(e.target.value)}
      />

      <TextField
        label="Description"
        variant="filled"
        type="email"
        minRows={3} multiline={true}
        className='texts'
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <Button onClick={<TextField
        label="Description"
        variant="filled"
        type="email"
        minRows={3} multiline={true}
        className='texts'
        value={desc}
        onChange={e => setDesc(...desc+e.target.value)}
      />}>Add</Button>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography>Select demo image or video:</Typography>
      <label htmlFor="icon-button-file">
        <Input accept="image/*, video/*" onChange={handleDemo} id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <CameraAltIcon />
        </IconButton>
      </label>
    </Stack>
    {imageUrl && selectedImage && (
      <Box mt={2} textAlign="left">
        <Typography>Preview:</Typography>
        <img src={imageUrl} alt={selectedImage.name} height="100px" />
      </Box>
    )}
          
      <div  >
      <Button style={{textAlign:'right'}} type="submit"  variant="contained" color="primary">
          Signup
        </Button>
      </div>
      </Box>
      
      </form>
      </Card>
    )
}

export default Uploads
