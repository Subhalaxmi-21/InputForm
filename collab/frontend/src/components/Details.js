import React,{useState, useEffect} from 'react';
// import './Profile.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button } from 'reactstrap';
// import './Profile.css';
import {  NavLink,useNavigate,useLocation, useParams} from 'react-router-dom';
const axios = require('axios');
function Details() {
  const location = useLocation();
  // console.log(location);
  const [details, setDetails] = useState([{}]);
  var fetchDateUrl = (id) => `http://localhost:3001/details/${id}`;
  const getDetails = () => {
    // console.log("getDetails")
    axios.get(fetchDateUrl(i_id))
    .then((res) => {
        if (res) {
            // console.log(res,"in fetch part  in get")
            setDetails(res.data);
        }
    });       
}

var fetchmentors = (id) => `http://localhost:3001/mentors/${id}`;
const [mentor, setMentor] = useState([]);
// removed above
const getMentor = () => {
  axios.get(fetchmentors(i_id))
  // console.log("in get mentors")
  .then((res) => {
      console.log(res,"in res of getMentor")
      if (res) {
          // console.log(typeof res.data)
          setMentor(res.data);
      }
  }).catch((err)=>{
    console.log(err)
  }); 
        
}



var pathArray = location.pathname.split('/');
var i_id = pathArray[2];
var u_id = 1;
// console.log(i_id);
// console.log(location.pathname);
useEffect(() => {
  getDetails();
  getMentor();
}, []);





const handleEvent = event => {
  alert("Your request for mentorship was accepted.");
  axios.post(`http://localhost:3001/mentor_request`,
  {
    i_id:i_id,
    u_id: u_id} )
    .then((res) => {
        if (res) {
            setDetails(res.data);
        }
    });

}; 
const handleRequest = event => {
  alert("Your request for collaboration was accepted.");
  axios.post(`http://localhost:3001/collab_request`,
  {
    i_id:i_id,
    u_id: u_id} )
    .then((res) => {
     
        if (res) {
            setDetails(res.data);
        }
    });    
}; 
    return (
      <>
      {details.map((details) => (
        
<div >
        <>
        <div>
        <div>
        <div >
          <div>
            <div>
              <div>
                <div >
                  <h6>Title:</h6>
                </div>
                <div>
                {details.name} 
                </div>
              </div>
              <hr/>
              <div>
              <div>
              <h6>Description:</h6>
              </div>
              <div>
              {details.desc}
              </div>
              </div>
              <hr/>
              <div>
              <div>
              <h6 >References:</h6>
              </div>
              <div >
              <a href={details.git}>{details.git}</a>  
              </div>
              </div>
              <hr/>
              <div >
              <div>
              <h6 >Mentors:</h6>
              </div>
              <>
      {mentor.map((mentor) => (
        <ul >
          <li style={{ paddingLeft:'250px'}}>
              <div >
              <a href={mentor.ulid}>{mentor.uname}</a>
              </div>
            </li>
              </ul>
      ))}
      </>
              </div>
              <hr/>
              <div className ="row">
              <div >
              <h6 >Collabrators:</h6>
              </div>
              <div >
              
              </div>
              </div>
              <hr/>
              <div >
              <Button outline color="info" onClick={handleRequest}>Want to Collaborate?</Button>{'   '}
              <Button outline color="info" onClick={handleEvent}>Want to Mentor?</Button>{' '}
              </div>
              </div>
              </div>
        </div>
        </div>
        </div>
        </>
        </div>

      ))}
     </> 
    )
}

export default Details
