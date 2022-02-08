import React,{useState } from 'react';
import axios from 'axios';
import './Header.css';
import './nav.css';
import Header from './Header';

function Uploads() {


    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [github, setGithub]=useState("");
    const [others, setOthers]=useState("");

  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

  const handleInputChange = (event) => {
   
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });
    console.log(userInfo.file)

  }

  const [isSucces, setSuccess] = useState(null);
  const data=()=>{
    axios.put("http://localhost:3005/uploadidea/1",{
      title: title, 
      description: description,
      github: github,
      others: others}).then(()=>{
    alert("Successful update!");
    });

  }
  // const multiple =()=>{
  //   data();
  //   submit();
    
  // }
  
  const submit = async () =>{
    alert("Your project idea is successfully uploaded.");
    const uid = 1;
    const formdata = new FormData(); 
    formdata.append('title',title);
    formdata.append('description',description);
    formdata.append('github',github);
    formdata.append('others',others);
    formdata.append('upload_file', userInfo.file);
    
console.log(userInfo.file)
axios.post(`http://localhost:3005/imageupload/${uid}`,formdata).then(res=>console.log(res)).catch(err=>console.log(err))
    
  }

  return (


    <>
    < Header />
    
    <div className="my-5 card" style={{marginTop:'50px', maxWidth:'80em', marginLeft: 'auto', marginRight: 'auto', maxHeight: '200em'}}>
      
      
          <h1 className="text-center" style={{marginTop:'50px'}}> ENTER DETAILS OF IDEA</h1>

          <div className="container contact_div">
              <div className="row">
                  <div className="col-md-6 col-10 mx-auto">
                      <form>
                          <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label">Title</label>
                              <input type="text" class="form-control"  placeholder=""
                               id="title"
                               name="title"
                               onChange= {(e) =>{
                                setTitle(e.target.value);
                                }}                              
                              />
                          </div>


                          <div class="mb-3">
                              <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                              <textarea class="form-control"  rows="6"
                              id="description"
                              name="description"
                              onChange= {(e) =>{
                               setDescription(e.target.value);
                               }}                              
                              ></textarea>
                          </div>


                          <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label">Github Link</label>
                              <input type="url" class="form-control"  placeholder="" 
                              id="github"
                              name="github"
                              onChange= {(e) =>{
                               setGithub(e.target.value);
                               }}
                               />
                          </div>


                          <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label">Any other information link</label>
                              <input type="url" class="form-control"  placeholder="" 
                              id="others"
                              name="others"
                              onChange= {(e) =>{
                               setOthers(e.target.value);
                               }}
                               />
                          </div>
                         
                          
                          {/* <h3 className="text-white">React Image Upload And Preview Using Node Js - <span> codeat21.com </span> </h3> */}

              <div className="formdesign">
                  {isSucces !== null ? <h4> {isSucces} </h4> : null}
                  <div className="form-row">
                  <label for="exampleFormControlInput1" class="form-label">Upload Image</label>
                      <label className="text-white">Select Image :</label>
                      <input type="file" className="form-control" name="upload_file" enctype='multipart/form-data'
 onChange={handleInputChange} />
                  </div>

                  <div className="form-row" style={{marginTop:'30px'}}>
                      <button type="submit" className="btn btn-dark" onClick={() => submit()}> Save </button>

                  </div></div>
                  {userInfo.filepreview !== null ?
                  <img className="previewimg" src={userInfo.filepreview} alt="UploadImage" style={{maxWidth:'40em', maxheight:'40em'}}/>
                  : null}

                  <div className='' style={{marginTop:'25px'}}>{' '}</div>
                      </form>
                  </div>
              </div>
          </div>


      </div>
      
      {/* <div className="container mr-60">
              <h3 className="text-white">React Image Upload And Preview Using Node Js - <span> codeat21.com </span> </h3>

              <div className="formdesign">
                  {isSucces !== null ? <h4> {isSucces} </h4> : null}
                  <div className="form-row">
                      <label className="text-white">Select Image :</label>
                      <input type="file" className="form-control" name="upload_file" onChange={handleInputChange} />
                  </div>

                  <div className="form-row">
                      <button type="submit" className="btn btn-dark" onClick={() => submit()}> Save </button>

                  </div>
              </div> */}

              {/* {userInfo.filepreview !== null ?
                  <img className="previewimg" src={userInfo.filepreview} alt="UploadImage" />
                  : null}

          </div></> */}

          </>
  );
}

export default Uploads;