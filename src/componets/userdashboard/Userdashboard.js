import Voting from './Voting';
import React from "react";
import { useState } from "react";
import {useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Userdashboard.css';


function Userdashboard()
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
        <p className='display-4 text-center shadow' >SEARCH ELECTION TYPE..!</p>      
      <form  className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)} >
      <div class="mb-3">
          <label for="electiontype" className="form-label">Election Type</label>
          <input type="text" className="form-control" id="electiontype" autocomplete='off'{...register("electiontype",{required:true})}/>
          {errors.electiontype&&<p className='text-danger'>*type of election  is required</p>}
        </div>
        <button type="submit" className="btn text-light bg-dark" >Search</button>
      </form>
      














      <div id="border"></div>
         </>
         
       {flag===1 && (
            <>
      
      <div className="container">
           <h1 className="text-center m-5">CANDIDATE DETAILS</h1>
           
            <table className="table table-hover p text-center table-bordered table-sm shadow  mb-5">
                <thead>
                    <tr className="barder=2">
                        <th>SERIAL NUMBER</th>
                        <th>CANDIDATE NAME</th>
                        <th>CANDIDATE ADDRESS</th>
                        <th>IDENTITY</th>
                        <th>VOTE</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                        array.map(userobj=>(<tr key={userobj.serialno}>
                            <td>{userobj.serialno}</td>
                            <td>{userobj.candidatename}</td>
                            <td>{userobj.candidateaddress}</td>
                            <td>{userobj.identity}</td>
                            <td>{<Voting serialnumber={userobj.serialno} countvote={userobj.countvote}/>}</td>
                        </tr>))
                }
                </tbody>
            </table>
            
            </div>
      
            </>
         )}
            



            </div>
                
    )
}

export default Userdashboard;