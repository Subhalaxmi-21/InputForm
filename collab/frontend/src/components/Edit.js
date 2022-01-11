// import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { Component, useState, useEffect } from 'react';
// import './edit.css';
import axios from 'axios';
import {  NavLink} from 'react-router-dom';
import { TextField } from '@mui/material';
export default function Edit()  {

  const [name, setName]=useState(null);
  const [year, setYear]=useState(null);
  const [city, setCity]=useState(null);
  const [phone, setPhone]=useState(null);
  const [interests, setInterests]=useState(null);
  const [List, setList] = useState([{}]);
 //   console.log(state);
   
    // const changeHandler = (e) => {
    //     setState({[e.target.name]: e.target.value})
    // };
    const getList =  () => {
      axios.get('http://localhost:3001/user/1' )
      .then((res) => {
          if (res) {
              setList(res.data);
              setName(res.data[0].name)
              setPhone(res.data[0].phone)
              setYear(res.data[0].year)
              setCity(res.data[0].city)
              setInterests(res.data[0].interests)
            
          }
      }); 
       
  }

const update = () =>{
  // if(name==null){
  //   console.log(List[0].name)
  //   setName(List[0].name)
  //   console.log(name)
  // }
  setName(List[0].name)
  // const editName=name?name:List
  axios.put("http://localhost:3001/edit/1",{
    name: name, 
    year: year,
    city: city,
    phone: phone, 
    interests: interests}).then(()=>{
    alert("Successful update!");
    });

   
};
const multiple =()=>{
  window.location.replace("http://localhost:3000/");
  update();
  
}
const redirect = () =>{
  window.location.replace("http://localhost:3000/");
}

useEffect(() => {
    getList();
}, []);

// const save = async () => {
//       //if (state) { 
//           axios.post('http://localhost:3005/edit/1',state).then((response) =>{
//             console.log(response);
//           });
//           //.then(async (res) => {
//             //  await getList();
//              // setState(null);
//           //});
//      // }       
//   }
    return(
      <>
      {List.map((List) => (
       
<div>
            <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-left">
                   
   <div className="card" >
                      
     <form className="form-card" >
     <div className="row justify-content-between text-left">
     <div className="form-group col-sm-6 flex-column d-flex">
        <label className="form-control-label px-3">Name</label>
        <input  type="text" id="name" name="name"
        onChange= {(e) =>{
          setName(e.target.value);
          }}  />
          {/* <TextField
          id="standard-basic"
          variant="standard"
          label="Name"
          defaultValue="Subhalaxmi Das"
          onChange= {(e) =>{
            
            setName(e.target.value);

            }}
        /> */}
      </div>
       <div className="form-group col-sm-6 flex-column d-flex">
        <label className="form-control-label px-3">Year</label> 
        <input type="text" id="year" name="year" placeholder={List.year}
        onChange = {(e) =>{
          setYear(e.target.value);
          }}  /> 
      </div>
      </div>
      <br/>
      <div className="row justify-content-between text-left">
      <div className="form-group col-sm-6 flex-column d-flex">
         <label className="form-control-label px-3">City</label> 
         <input type="text" id="email" name="city" placeholder={List.city} 
         onChange= {(e) =>{
          setCity(e.target.value);
          }}   /> 
      </div>
       <div className="form-group col-sm-6 flex-column d-flex">
        <label className="form-control-label px-3">Phone number</label> 
        <input type="number" id="phone" name="phone"  placeholder={List.phone} 
        onChange= {(e) =>{
          setPhone(e.target.value);
          }}   /> 
      </div>
      </div>
       <br/>
      <div className="row justify-content-between text-left">
        <div className="form-group col-12 flex-column d-flex">
           <label className="form-control-label px-3">Interests</label>
            <input type="text" id="ans" name="interests" placeholder={List.interests}
             onChange= {(e) =>{
              setInterests(e.target.value);
              }}  /> 
        </div>
      </div>
    <br/>
      <div className="row justify-content-between">
      <div className="form-group col-sm-6">
     
      <button type="submit" className="btn-block btn-primary" 
        onClick={multiple}>Submit</button>   
        
      
        
         </div>
     </div>
 </form>
     </div>
      </div>
     </div>
    </div>
     </div>
    )
   
    )};
     </>
    )}


