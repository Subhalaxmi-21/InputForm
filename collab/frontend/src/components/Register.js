import axios from "axios";

import React, { useState, useEffect } from "react";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [RegisterStatus, setRegisterStatus] = useState('');

    axios.defaults.withCredentials = true;

    const register = () => {
        axios.post("http://localhost:3001/register", {
            email: email,
            password: password
        }).then((response) => {

            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus(response.data[0].email);
            }


        });
    };


    return (
        <>
        <br></br><br></br>
            <div className="my-5">
                <h1 className="text-center"><strong> Register</strong></h1><br></br><br></br><br></br>

                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><h3>Email</h3></label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" 
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><h3>Password</h3></label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" 
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit" onClick={register}>Submit form</button>
                            </div>
                            <h1>{RegisterStatus}</h1>
                            </form>
                        </div>
                    </div>                    
                </div>
                    

            </div>
                
            
        </>
    )
}

export default Register;