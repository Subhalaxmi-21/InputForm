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
  const [filename, setFilename] = useState("")
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      console.log(imageUrl)      
    }
  }, [selectedImage]);

  // const handleReader = readerEvt => {
  //   let binaryString = readerEvt.target.result
  //   setBase(btoa(binaryString))
  // }

  const handleDemo =e=>{
    setSelectedImage(e.target.files[0])
    setFilename(e.target.files[0].name)

  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",firstName)
    formData.append("git_repo",git)
    formData.append("description",desc)

    formData.append("imgs", selectedImage);
    formData.append("fileName", filename);
    console.log(selectedImage)
  
    axios.post('http://localhost:3001/posts',formData).then(res=>console.log(res)).catch(err=>console.log(err))
  };
    return (
    
      <Card style={{padding:"2rem"}}>  
    <form  onSubmit={handleSubmit} enctype='multipart/form-data' > 
     
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
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography>Select demo image or video:</Typography>
      <label htmlFor="icon-button-file">
        <Input accept="image/*, video/*" name="myImg" onChange={handleDemo} id="icon-button-file" type="file"  />
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
