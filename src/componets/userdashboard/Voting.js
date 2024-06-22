import React, { useState } from "react";
import {useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import NewElection from "../../admindashboard/NewElection";
import Userdashboard from "./Userdashboard";

 function Voting(props)
 {
    

    const serialnumber2=props.serialnumber;
    
    const { register,handleSubmit,formState:{ errors }}=useForm()
      
    const navigate=useNavigate();

    const onFormSubmit=(userObj)=>{
        //http post request
        axios.post('http://localhost:4000/user-api/create-vote',userObj)
        .then(response=>{
            alert(response.data.message);
            //count updating thats why iam taking new axios
           // let matchnumber2=response.data.payload;
            if(response.data.message==="Your vote is successfully recorded")
            {
            axios.put('http://localhost:4000/user-api/update-count',userObj)
            .then(response2=>{
                //console.log(response2.data.payload);
                alert(response2.data.message);
            })
            .catch(error2=>alert("error in submitting vote."))
          }
          })
          .catch(error=>alert('Your vote is not recorded '));
        
    }
    return(
        <>
        {/*modal*/}
        <div className="modal fade" id="dialog">
            <div className="modal-dialog modal-sm modal-lg">
                <div className="modal-content">
                    <div className="modal-header">Voting
                    <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                    <form  className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
<div class="mb-3">
    <label htmlFor="athernumber" className="form-label">Aadhar Number</label>
    <input type="text" className="form-control" name="athernumber" id="athernumber" autocomplete='off'{...register("athernumber",{minLength:'12',maxLength:'12',required:true})}/>
    {errors.athernumber ?.type=='required' &&<p className='text-danger'>*aadhaarnumber is required</p>}
    {errors.athernumber?.type=='minLength' && <p className='text-danger'>*aadhar number  must be 12 characters</p>}
    {errors.athernumber?.type=='maxLength' && <p className='text-danger'>*aadhar number  must be 12 characters</p>}
  </div>
  <div class="mb-3">
    <label htmlFor="mobilenumber" className="form-label">Mobile Number</label>
    <input type="text" className="form-control" name="mobilenumber" id="mobilenumber" autocomplete='off' {...register("mobilenumber",{minLength:'10',maxLength:'10',required:true})}/>
    {errors.mobilenumber?.type=='required'&&<p className='text-danger'>*mobile number is required</p>}
    {errors.mobilenumber?.type=='minLength' && <p className='text-danger'>*mobile number  must be 10 characters</p>}
    {errors.mobilenumber?.type=='maxLength' && <p className='text-danger'>*mobile number  must be 10 characters</p>}
  </div>
  <div class="mb-3">
    <label htmlFor="matchnumber" className="form-label">Matching Number</label>
    <input type="number" className="form-control" name="matchnumber" id="matchnumber"  {...register("matchnumber",{valueAsNumber:true,required:true})}/>
    {errors.matchnumber&&<p className='text-danger'>*match number is required</p>}
  </div>
  
  <button type="submit" className="btn text-light bg-dark" >Submit</button>
</form>
                    </div>
                </div>
            </div>

        </div>
     {/*  Button to invoke modal */}
     <button className="btn text-light bg-dark m-5" data-bs-toggle="modal" data-bs-target="#dialog" >Click Here</button>

        </>
    )
 }
 export default Voting;