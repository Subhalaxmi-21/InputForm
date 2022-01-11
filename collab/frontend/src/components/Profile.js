import React,{useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import './Profile.css';
// import img1 from "./images/user.png";
import {  NavLink,useNavigate} from 'react-router-dom';

const axios = require('axios');
function Profile() {

  const navigate = useNavigate();
  const [List, setList] = useState([{}]);
  const getList = () => {
    axios.get('http://localhost:3001/user/1' )
    .then((res) => {
        if (res) {
            setList(res.data);
        }
    });       
}

  const [details, setDetails] = useState([{}]);
  const getDetails = () => {
    axios.get('http://localhost:3001/topics/1' )
    .then((res) => {
        if (res) {
            setDetails(res.data);
        }
    });       
}
{details.map((details) => (
  console.log(details.idea_id)
))};

const eventHandler = event => {
  
  navigate({
     pathname: '/details',
     state: {...details.idea_id}
  });
}; 
   
useEffect(() => {
    getList();
    getDetails();
}, []);

return (
<>
  {List.map((List) => (
    <div >
    <> 
    <div >
          <div  >
            <div >
              <div  style={{marginTop:'20px'}}>
                <div>
                  <div>
                    {/* <img src={img1} alt="Admin" className="rounded-circle" width="150"/> */}
                    <div>
                    <h4>{List.name}  </h4>
                    <p>{List.year}</p>
                    <p>{List.branch}</p>
    
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div style={{marginTop:'10px'}}>
              <div>
                <div>
                  
                  
                  <div>
                  <div>
                  <h6>Email</h6>
                  </div>
                  <div>
                  {List.email}
                  </div>
                  </div>
                  <hr/>
                  <div className ="row">
                  <div >
                  <h6 >Phone No:</h6>
                  </div>
                  <div>
                  {List.phone}
                  </div>
                  </div>
                  <hr/>
                  <div className ="row">
                  <div >
                  <h6 >City</h6>
                  </div>
                  <div >
                  {List.city}
                  </div>
                  </div>
                  <hr/>
                  <div className ="row">
                  <div>
                  <h6 >Interests</h6>
                  </div>
                  <div >
                  {List.interests}
                  </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div >
                      <h6 >LinkedIn Profile:</h6>
                    </div>
                    <div>
                    <a href={List.linkedin}>{List.linkedin}</a>
                    </div>
                    
                  </div>
                  <hr/>
                  <NavLink to="/Edit">
                  <span ><button  className ="btn btn-outline-primary">Edit</button></span>
                </NavLink>
                 
                  </div>
                  </div>
                  <div >
              <div >
              <div >
              <div >
              {'   '}<h6 >Submitted Ideas </h6>
    {details.map((details) =>(
      <div>
              
              <ul>
              
              <li>
                <h6>{details.name}</h6>
                
                <span ><button onClick={()=> navigate(`/details/${details.idea_id}`)} className ="btn btn-outline-primary">View Status</button></span>

              </li>
            </ul>
              
            </div>   
    ))}
                  
     
   
              </div>
              </div>
            </div>

      </div>             
    
                
                  </div>
                  </div>
    </div>
    </>
    
    </div>
))

}

</>
  );
}

export default Profile
