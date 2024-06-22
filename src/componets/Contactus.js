import React from "react";
import {useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Contactus.css';
import contactUsimg from '../images/contactUs.svg';
function Contactus(){
    const { register,handleSubmit,formState:{ errors }}=useForm()
   //usenavigate into login
   const navigate=useNavigate();
    //form submission function 
    const onFormSubmit=(userObj)=>{
        //http post request
      axios.post('http://localhost:4000/user-api/contactUs',userObj)
        .then(response=>{
          
          alert(response.data.message);
          
        })
        .catch(error=>alert('something went wrong for your information..'));
    }
    return(
<div className="containser-fluid mb-5">  
  <p className='display-4 text-center shadow' >CONTACT US</p>    
  <hr></hr>  
  <div className="row p-5">
  <div className="col pl-5 mb-0">
      <img src={contactUsimg} alt="" className="opacity-100" height="470px" weight="470px"/>
      </div>
    <div className="col pe-5">
<form  className='w-100  border border-2 p-4 shadow' onSubmit={handleSubmit(onFormSubmit)}>
  
<div className="mb-3 ">
    
    <label htmlFor="fullname" className="form-label">Fullname</label>
    <input type="text" className="form-control" id="fullname" autoComplete='off'{...register("fullname",{required:true})}/>
    {errors.fullname&&<p className='text-danger'>*fullname is required</p>}
  </div>

  <div className="mb-3 ">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email"  autoComplete='off' aria-describedby="emailHelp"  {...register("email",{reuqired:true})}/>
    {errors.email&&<p className='text-danger'>*email is required</p>}
   
  </div>
  <div className="mb-3 ">
    <label htmlFor="phonenumber" className="form-label">Phonenumber</label>
    <input type="text" className="form-control" id="phonenumber" autoComplete='off' {...register("phonenumber",{required:true})}/>
    {errors.phonenumber&&<p className='text-danger'>*phonenumber is required</p>}
  </div>

  <div className="mb-3 ">
    <label htmlFor="addquery" className="form-label">Add query</label>
    
    <textarea name="addquery" id="addquery" cols="30" rows="5"  className="form-control" placeholder="Any comment or your query.." {...register("addquery",{required:true})}></textarea>
    {errors.addquery&&<p className='text-danger'>*addquery is required</p>}
  </div>
  
  <button type="submit" className="btn btn-primary form-control" >Send</button>
</form>
</div>
      
      {/* grid dev below */}
</div>
</div>
        
    )
}
export default Contactus