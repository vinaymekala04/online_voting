import React from "react";
import {useForm } from 'react-hook-form';
import { useSelector } from "react-redux";


import userdashboard  from "./userdashboard/Userdashboard";
import { useNavigate } from "react-router-dom";
import admindashboard from "../admindashboard/Admindashboard";
import singimg from '../images/signupimg.svg'
import axios from "axios";



function Login(){

  
    const { register,handleSubmit,formState:{ errors },}=useForm()
    let navigate=useNavigate()
    //form submission
    const onFormSubmit=(usercredentialobject)=>{
      //console.log(usercredentialobject);
      if(usercredentialobject.userType=== "user"){
        //dispatch(userLogin(usercredentialobject))
        //console.log(usercredentialobject)
        axios.post('http://localhost:4000/user-api/login',usercredentialobject)
        .then(responce=>{
         
          console.log(responce.data);
          alert(responce.data.message);
           //store token in local storage
           if(responce.data.message==="login successfully")
           {
            localStorage.setItem("token",responce.data.payload);
            navigate('/userdashboard'); 
           }
          
        })
        .catch(error=>{
          console.log("gave me wrong details")
        })
      }
      if(usercredentialobject.userType === "admin"){
        axios.post('http://localhost:4000/user-api/login-admin',usercredentialobject)
        .then(responce=>{
          console.log(responce.data.message);
          console.log(responce.data);
          alert(responce.data.message);
           //store token in local storage
           if(responce.data.message==="login successfully")
           {
            localStorage.setItem("token",responce.data.payload);
            navigate('/admindashboard');
           }
        
        })
        .catch(error=>{
          console.log("gave me wrong details")
        }) 
      }
    }
    return(
        <div className="bg-light">
            <p className="display-4 text-black text-center shadow"> LOGIN</p>
            <hr></hr>
    <div className="row m-5">
         
    <div className="col">
<form  className='w-100  border p-5 border-2 shadow' onSubmit={handleSubmit(onFormSubmit)}>
  <div className="mb=3">
    <label>Select type of user</label>
    <div className="form-check"> 
        <input type="radio" id="user" name="same" value="user" className="form-check-input" {...register("userType",{required:false})} />
        <label htmlFor="user" className="form-check-label">user</label>
    </div>

    <div className="form-check" > 
        <input type="radio" id="admin" value="admin" name="same" className="form-check-input" {...register("userType",{required:false})} checked/>
        <label htmlFor="admin" className="form-check-label">admin</label>
    </div>
  </div>
<div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" autoComplete='off'{...register("username",{required:true})}/>
    {errors.username&&<p className='text-danger'>*username is required</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  id="password" autoComplete='off' {...register("password",{required:true})}/>
    {errors.password&&<p className='text-danger'>*password is required</p>}
  </div>
  <button type="submit" className="btn btn-primary form-control" >Submit</button>
</form>
</div>
<div className="col">
              <img src={singimg} className="opacity-100" alt="" weight="400px" height="400px"/>
          </div>
</div>
        </div>
    )
}
export default Login;