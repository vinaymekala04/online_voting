import Userdashboard from '../componets/userdashboard/Userdashboard';
import Voting from '../componets/userdashboard/Voting';
import React from "react";
import { useState } from "react";
import {useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ViewResult()
{
    const { register,handleSubmit,formState:{ errors }}=useForm()

    const navigate=useNavigate();
     
    let [array,setArray]=useState([]);
    let [flag,setFlag]=useState(0);
    
     
    const onFormSubmit=(candidate)=>{
        axios.post('http://localhost:4000/user-api/search-election',candidate)
        .then(response=>{
        
          setArray(response.data.payload);
          setFlag(1);
          alert(response.data.message);
        })
        .catch(error=>alert('something went wrong in searching election..'));
    }
    return(
        <div>  
            
         
            <>
        <p className='display-2 text-center' >SEARCH ELECTION TYPE..!</p>      
      <form  className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)} >
      <div class="mb-3">
          <label for="electiontype" className="form-label">Election Type</label>
          <input type="text" className="form-control" id="electiontype" autocomplete='off'{...register("electiontype",{required:true})}/>
          {errors.electiontype&&<p className='text-danger'>*type of election  is required</p>}
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
         </>
            
            <>
      {flag===1 &(
      <div className="container-fluid">
           <h1 className="text-center m-5">CANDIDATE DETAILS</h1>
           
            <table className="table table-hover table-bordered table-sm shadow">
                <thead>
                    <tr className="barder=2 mb-4">
                        <th>SERIAL NUMBER</th>
                        <th>CANDIDATE NAME</th>
                        <th>CANDIDATE ADDRESS</th>
                        <th>IDENTITY</th>
                        
                        <th>COUNT VOTE LIST</th>
                    
                    </tr>
                </thead>
                <tbody>
                {
                        array.map(userobj=>(<tr key={userobj.serialno} className='mb-4'>
                            <td>{userobj.serialno}</td>
                            <td>{userobj.candidatename}</td>
                            <td>{userobj.candidateaddress}</td>
                            <td>{userobj.identity}</td>
                        
                            <td>{userobj.countvote}</td>
                            
                        </tr>))
                    }
                </tbody>
            </table>
            
            </div>
      )}
            </>
            



            </div>
                
    )
}

export default ViewResult;