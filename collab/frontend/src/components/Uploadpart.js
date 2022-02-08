import React,{useState } from 'react';
import axios from 'axios';
function Uploads() {


    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [github, setGithub]=useState("");
    // const [others, setOthers]=useState("");
    const [task, setTask] = useState([]);


  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

   const addlink =() =>{
        
    setTask([...task, ""])
}
const handleChange = (e, index)=>{
    task[index]= e.target.value
    setTask(task)
}

const handleRemove=(index)=>{
    let tasks = [...task];
    tasks.splice(index,1)
   
    setTask(tasks)

}

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
      
  
      task:task
    }).then(()=>{
    alert("Successful update!");
    });

  }
 
  
  const submit = async () =>{
    alert("Your project idea is successfully uploaded.");
    const uid = 1;
    const formdata = new FormData(); 
    formdata.append('title',title);
    formdata.append('description',description);
    formdata.append('github',github);
    formdata.append('task',task);
    formdata.append('upload_file', userInfo.file);
    
console.log(userInfo.file)
axios.post(`http://localhost:3005/imageupload/${uid}`,formdata, {
  task:task
  }
).then(res=>console.log(res)).catch(err=>console.log(err))

  }
  return (


    <>
    {/* < Header /> */}
    
    <div className="my-5 card" style={{marginTop:'50px', maxWidth:'80em', marginLeft: 'auto', marginRight: 'auto', maxHeight: '200em'}}>
      
      
          <h1 className="text-center" style={{marginTop:'50px'}}> ENTER DETAILS OF IDEA</h1>

          <div className="container contact_div">
              <div className="row">
                  <div className="col-md-6 col-10 mx-auto">
                      <form>
                          <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                              <input type="text" className="form-control"  placeholder=""
                               id="title"
                               name="title"
                               onChange= {(e) =>{
                                setTitle(e.target.value);
                                }}                              
                              />
                          </div>


                          <div className="mb-3">
                              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                              <textarea className="form-control"  rows="6"
                              id="description"
                              name="description"
                              onChange= {(e) =>{
                               setDescription(e.target.value);
                               }}                              
                              ></textarea>
                          </div>


                          <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Github Link</label>
                              <input type="url" className="form-control"  placeholder="" 
                              id="github"
                              name="github"
                              onChange= {(e) =>{
                               setGithub(e.target.value);
                               }}
                               />
                          </div>
                              
                          <div className="mb-3">
                          <label>Other Link</label>
                          {task.map((task,index)=>(
                    
                    <div key={index}>
                    <input value={task.task} type= "text" onChange={(e)=>handleChange(e,index)} placeholder=''
                    id="task" name="task"
                    />
                    <button onClick={()=>handleRemove()}>Remove</button>
                    </div>
                )
              )
    }
    <button onClick={(e)=>addlink(e)}>Add</button>
   
                          </div>         
                          
                        

              <div className="formdesign">
                  {isSucces !== null ? <h4> {isSucces} </h4> : null}
                  <div className="form-row">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Upload Image</label>
                      <label className="text-white">Select Image :</label>
                      <input type="file" className="form-control" name="upload_file" encType='multipart/form-data'
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
      
      
          </>
  );
}

export default Uploads