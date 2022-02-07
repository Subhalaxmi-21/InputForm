import React,{useState, useEffect, useStyles} from 'react';
// import './Profile.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
// import './Profile.css';
// import { AiTwotoneUnlock } from "react-icons/ai";
// import Header from "./Header";
import axios from 'axios';



// const useStyles = makeStyles((theme) => ({

// }));


export default function Registration() {


  // axios.defaults.withCredentials = true;


  const classes = useState("");
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [branch, setBranch]=useState("");
  const [year, setYear]=useState("");
  const [collegeId, setCollegeId]=useState("");
  const [phone, setPhone]=useState("");
  const [interests, setInterests]=useState("");
  const [city, setCity]=useState("");
  const [password, setPassword]=useState(""); 

  const insert = () =>{
  alert("Registered!");
    axios.post("http://localhost:3001/insert",{
      name: name,
      email: email,
      branch: branch,
      year: year,
      collegeId: collegeId,
      phone: phone,
      interests: interests,
      city: city,
      phone: phone, 
      password: password}).then(()=>{
        
      
      });     
  };
 
    return (
      <>
      
    {/* <Header/>     */}
<div>

        <Container style={{backgroundColor:"white"}}>
          
        <form>
        <div className='"main-body'>
        <div className="card" style={{marginTop:'50px', maxWidth:'80em', marginLeft: 'auto', marginRight: 'auto'}}>
        <div className="col-md-12">
            <div className="card-body" style={{marginTop:'0px'}}>
            <div className="container contact_div">
            <div className="col-md-6 col-10 mx-auto">
            <div className="row">

              
              
              {/* <center> <AiTwotoneUnlock style={{color:'#FC0076', maxHeight: '200px', maxWidth: '20em'}} /></center> */}

              <h3 style={{marginTop:'20px', color: '#303699'}} ><strong><center>Registration</center></strong></h3> <br></br>

              <div className="mb-3" style={{marginTop:'30px'}}>
                <label for="exampleFormControlInput1" className="form-label"><h5>Name : </h5></label>
                <input type="text" className="form-control" id="name" name="name" placeholder="" 
                onChange= {(e) =>{
                  setName(e.target.value);
                  }} 
                />
              </div>               

              
              
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Email Address : </h5></label>
                <input type="email" className="form-control" id="email" name="email" placeholder=""
                  onChange= {(e) =>{
                    setEmail(e.target.value);
                    }} 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Year : </h5></label>
                <input type="text" className="form-control" id="year"  name="year" placeholder="" 
                onChange= {(e) =>{
                  setYear(e.target.value);
                  }} 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Branch : </h5></label>
                <input type="text" className="form-control" id="branch" name="branch" placeholder="" 
                onChange= {(e) =>{
                  setBranch(e.target.value);
                  }} 
                />
              </div>

              

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Phone : </h5></label>
                <input type="text" className="form-control" id="phone" name="phone" placeholder="" 
                onChange= {(e) =>{
                  setPhone(e.target.value);
                  }} 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>City : </h5></label>
                <input type="text" className="form-control" id="city" name="city" placeholder="" 
                onChange= {(e) =>{
                  setCity(e.target.value);
                  }} 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Interest : </h5></label>
                <input type="text" className="form-control" id="interests" name="interests" placeholder="" 
                 onChange= {(e) =>{
                  setInterests(e.target.value);
                  }} 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>LinkedIn Profile Link : </h5></label>
                <input type="text" className="form-control" id="collegeId" name="collegeId" placeholder="" 
                 onChange= {(e) =>{
                  setCollegeId(e.target.value);
                  }} 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Password : </h5></label>
                <input type="password" className="form-control" id="password" name="password" placeholder="" 
                onChange= {(e) =>{
                  setPassword(e.target.value);
                  }} 
                />
              </div>

              <br></br><br></br>

              
              
              <Button outline color="primary" style={{marginTop:'15px'}} className={classes.submit} type="submit" onClick={() => insert()}>Register</Button> 

              <div style={{marginTop:'50px'}}></div>
             

 
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </form>
        
        </Container>
</div>

      ))
     </> 
    )
}



