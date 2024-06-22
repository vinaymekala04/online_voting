import React from "react";
import {useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function NewElection()
{
    const { register,handleSubmit,formState:{ errors }}=useForm()

    const navigate=useNavigate();

    const onFormSubmit=(candidate)=>{
        axios.post('http://localhost:4000/user-api/create-candidate',candidate)
        .then(response=>{
         //console.log(response.data.payload);
          
          alert(response.data.message);
        })
        .catch(error=>alert('something went wrong in creating candidate..'));
    }
    return(
        <div>  
  <p className='display-4 text-center shadow' >ADD CANDIDATE</p> 
  <hr></hr>     
<form  className='w-50 mx-auto border border-2 p-4 shadow' onSubmit={handleSubmit(onFormSubmit)} >
<div class="mb-3">
    <label htmlFor="electiontype" className="form-label">Election Type</label>
    <input type="text" className="form-control" name="electiontype" id="electiontype" autocomplete='off'{...register("electiontype",{required:true})}/>
    {errors.electiontype&&<p className='text-danger'>*type of election  is required</p>}
  </div>
  
  <div class="mb-3">
    <label htmlFor="serialno" className="form-label">SERIAL NUMBER</label>
    <input type="number" className="form-control" name="serialno" id="serialno" autoComplete='off' {...register("serialno",{valueAsNumber:true,required:true})}/>
    {errors.serialno&&<p className='text-danger'>*serial number is required</p>}
  </div>

  <div class="mb-3">
    <label htmlFor="candidatename" className="form-label">Candidate Name</label>
    <input type="text" className="form-control" name="candidatename" id="candidatename" autocomplete='off' {...register("candidatename",{required:true})}/>
    {errors.candidatename&&<p className='text-danger'>*Candidate name is required</p>}
  </div>
  <div class="mb-3">
    <label htmlFor="candidateaddress" className="form-label">Candidate Address</label>
    <textarea id="candidateaddress" className="form-control" name="candidateaddress" rowa="5" {...register("candidateaddress",{required:true})}/>
    {errors.candidateaddress&&<p className='text-danger'>*Candidate Adress is required</p>}
  </div>
  <div class="mb-3">
    <label htmlFor="identity" className="form-label">Identity</label>
    <input type="text" className="form-control" name="identity" id="identity"  autoComplete='off' {...register("identity",{required:true})}/>
    {errors.identity&&<p className='text-danger'>*candidate identity  is required</p>}
  </div>
  <div class="mb-3">
    <label htmlFor="countvote" className="form-label">Count Vote</label>
    <input type="number" className="form-control" name="countvote" id="countvote"  {...register("countvote",{valueAsNumber:true,required:true})}/>
    {errors.countvote&&<p className='text-danger'>*counting vote is required</p>}
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
    )
}
export default NewElection;