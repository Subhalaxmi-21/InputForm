import React,{useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'reactstrap';
// import './approval.css';
// import {  NavLink,useNavigate} from 'react-router-dom';
const axios = require('axios');
function Approval() {
// removed {}
  const [details, setDetails] = useState([]);
  const getDetails = () => {
    axios.get('http://localhost:3001/gettopic' )
    .then((res) => {
        if (res) {
            setDetails(res.data);
        }
    });       
}
// console.log(details)
// const navigate = useNavigate();
  // details added in useeffect 
useEffect(() => {
  getDetails();
  console.log(details)
},[]);

function handleApproval(mid) {
 
  axios.put(`http://localhost:3001/approvemcollab/${mid}`)
  .then((res) => {
    if (res) {
        // setDetails(res.data);
        console.log(res.data)
    }
}); 
getDetails();
}; 
function handleRejection(mid) {
  axios.put(`http://localhost:3001/rejectmentor/${mid}` )
  .then((res) => {
    if (res) {
        setDetails(res.data);
    }
}); 
getDetails();  
};
  return (
    
    <div style={{backgroundColor:'white'}}>
      
<h4 style={{textAlign:'center', paddingTop:'20px'}}>Requests for Mentorship</h4>

<table id="customers">
  
  <tr>
    
    <th>User Name</th>
    <th>Title</th>
    <th>Action</th>
    
  </tr>
  <>
{details && details.map((details) =>(
  <tr>
   {/* <td><a href={details.lid}>{details.uname}</a></td> */}
   <td>{details.mid}</td>
    {/* <td><a href='' onClick={()=> navigate(`/details/${details.iid}`)} > {details.iname}</a></td> */}
    
    <td> {details.status}</td>
    <td> <span className="text-secondary"><button onClick={(event) => handleApproval(details.mid)} className ="btn btn-outline-primary">Approve</button></span>
    {'  '}{'  '} <span className="text-secondary"><button onClick={(event) => handleRejection(details.mid)} className ="btn btn-outline-primary">Reject</button></span>
    </td>
   
  </tr>
))}
 </>
</table>
    </div>

  
  )
}

export default Approval
