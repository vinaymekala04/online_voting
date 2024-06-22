import React from "react";
import {useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import signup from '../images/signimg.svg';

function Signup(){
   const { register,handleSubmit,formState:{ errors }}=useForm()
   //usenavigate into login
   const navigate=useNavigate();
    //form submission function 
    const onFormSubmit=(userObj)=>{
        //http post request
      axios.post('http://localhost:4000/user-api/new',userObj)
        .then(response=>{
          
          alert(response.data.message);
          if(response.data.message==="new user created successfully")
          {navigate('/login');

          }
        })
        .catch(error=>alert('something went wrong in creating user..'));
    }
    return(
<div className="containser-fluid mb-5">  
  <p className='display-4 text-center shadow' >SIGNUP</p>    
  <hr></hr>  
  <div className="row p-5">
  <div className="col pl-5 mb-0">
      <img src={signup} alt="" className="opacity-100" height="410px" weight="470px"/>
      </div>
    <div className="col pe-5">
<form  className='w-100  border border-2 p-4 shadow' onSubmit={handleSubmit(onFormSubmit)}>
  
<div className="mb-3 ">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" autoComplete='off'{...register("username",{required:true})}/>
    {errors.username&&<p className='text-danger'>*username is required</p>}
  </div>
  <div className="mb-3 ">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  id="password" autoComplete='off' {...register("password",{required:true})}/>
    {errors.password&&<p className='text-danger'>*password is required</p>}
  </div>
  <div className="mb-3 ">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email"  autoComplete='off' aria-describedby="emailHelp"  {...register("email",{reuqired:true})}/>
    {errors.email&&<p className='text-danger'>*email is required</p>}
   
  </div>
  <div className="mb-3 ">
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" autoComplete='off' {...register("city",{required:true})}/>
    {errors.city&&<p className='text-danger'>*City is required</p>}
  </div>
  
  <button type="submit" className="btn btn-primary form-control" >Submit</button>
</form>
</div>
      
      {/* grid dev below */}
</div>
</div>
        
    )
}
export default Signup;