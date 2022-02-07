import React,{useState, useEffect} from 'react';
// import './Profile.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
// import './Profile.css';
// import { Link,useNavigate} from 'react-router-dom';
// import { AiTwotoneUnlock } from "react-icons/ai";
// import Header from "./Header";
import axios from 'axios';


function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");

  axios.defaults.withCredentials = true;

  const login = () => {
    axios.post("http://localhost:3001/login", {
        email: email,
        password: password
    }).then((response) => {
      console.log(response.data.message);
        if(response.data.message){
            setLoginStatus(response.data.message);
            console.log(response.data.message)
            alert("Wrong combination");
        }else{
            setLoginStatus(response.data[0].email);
            alert("Success");
            // navigate(`/profile`)
        }


    });
    
};

useEffect(() => {
  axios.get("http://localhost:3001/login").then((response) => {
  console.log(response)

    if (response.data.loggedIn == true){
          setLoginStatus(response.data.user[0].email)
      }
     
  });
 
  
  },[])





    return (
      <>
      
        
<div>
{/* <Header/> */}
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

              <h3 style={{marginTop:'20px', color: '#303699'}} ><strong><center>Login</center></strong></h3> 
                       
              
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><h5>Email Address : </h5></label>
                <input type="email" className="form-control" id="email" name="email" placeholder=""
                  onChange= {(e) =>{
                    setEmail(e.target.value);
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

            
              
              {/* <Button outline color="primary" style={{marginTop:'25px'}} type="submit" onClick={() => login()}>Login</Button>  */}
              <Button outline color="primary" style={{marginTop:'25px'}} type="submit" onClick={()=>login()}>Login</Button> 
            

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

export default Login;
