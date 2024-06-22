let exp=require('express')

let userApi=exp.Router();
//import handler
const expressAsyncHandler=require("express-async-handler");
//import bcryptjs 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
userApi.use(exp.json())
//require("dotenv").config();



//Get all users router-1
userApi.get('/getusers',expressAsyncHandler(async(request,response)=>{
    //include collection
    let usercollectionobject=request.app.get("usercolobject");
    //
    let user=await usercollectionobject.find().toArray();
    response.send({message:"users list",payload:user})
    
}));





//router-3 
//create new user
userApi.post('/new',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let userCollectionobject=request.app.get("usercolobject");

    //user body include
    let newuser=request.body;
    let userobject=await userCollectionobject.findOne({username:newuser.username})
    if(userobject!==null){
        response.send({message:"user already taken so you take new username.."})
    }
    else{
        //hash password
        let hashedpassword= await bcryptjs.hash(newuser.password,6);

        //replace plain password to hashed password
        newuser.password=hashedpassword;

        //insert new user into usercollections
        await userCollectionobject.insertOne(newuser);
        //send response
        response.send({message:"new user created successfully"})
    }
}))



//contact Us information
userApi.post('/contactUs',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let userCollectionobject=request.app.get("contactcolobject");

    //user body include
    let newuser=request.body;
        //insert new user into usercollections
        await userCollectionobject.insertOne(newuser);
        //send response
        response.send({message:"Your message sent successfully..."})
    
}))



//create new candidate
userApi.post('/create-candidate',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let candidateCollectionobject=request.app.get("candidatecolobject");

    //user body include
    let newcandidate=request.body;
    let candidateobject=await candidateCollectionobject.findOne({serialno:newcandidate.serialno})
    if(candidateobject!==null){
        response.send({message:" serial number already taken so you can take new serial number.."})
    }
    else{
    
        //insert new candidate into candidatecollections
        await candidateCollectionobject.insertOne(newcandidate);
        //send response
        response.send({message:"new candidate created successfully",payload:newcandidate})
        //response.send({newcandidate})
        
    }
}))




//update count route
userApi.put('/update-count',expressAsyncHandler(async(request,response)=>{
    let newdata=request.body;
    //include usercollection
    let candidateCollectionobject=request.app.get("candidatecolobject");

    //let countold=await candidateCollectionobject.findOne({serialno:newdata.matchnumber})
    
    
    let countnew=await candidateCollectionobject.updateOne({serialno:newdata.matchnumber},{$inc:{countvote:1}})
    
        response.send({message:" successfully updated....",payload:countnew})
    
   
}))

//searching election type
userApi.post('/search-election',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let candidateCollectionobject=request.app.get("candidatecolobject");

    //user body include
    let newcandidate=request.body;
    let candidateobject=await candidateCollectionobject.find({electiontype:newcandidate.electiontype}).toArray()
    if(candidateobject !== undefined){
        response.send({message:"candidate list",payload:candidateobject});
    }
    else{
        response.send({message:"You should give correct election type   "});
    }
}))


//votting start
userApi.post('/create-vote',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let votecollectionobj=request.app.get("vottingcolobject");

    //include credential from the client
    let newvoter=request.body;
    //verify adharnumber
    let voter= await votecollectionobj.findOne({athernumber:newvoter.athernumber})
    // username not matched
    
    if(voter!==null)
    {
        response.send({message:"You already given vote to the particular candidate"})
    }
    else{
        
        //i new voter into vottingcollections
        await votecollectionobj.insertOne(newvoter);
        //response matchnumber to the voting js file
        let matched=newvoter.matchnumber;
        //send response
        response.send({message:"Your vote is successfully recorded",payload:matched})
        
    }
    
}))




//login user
userApi.post('/login',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let usercollectionobj=request.app.get("usercolobject");

    //include credential from the client
    let credobj=request.body;
    
    //verify username
    let userofDB= await usercollectionobj.findOne({username:credobj.username})
    
    // username not matched
    if(userofDB==null)
    {
        response.send({message:"Invalid username"})
    }
    else{
        //match the passwords
        let matchpassword= await bcryptjs.compare(credobj.password,userofDB.password);
        //not matched 
        
        if(matchpassword==false)
        {
           
            //send the response to the client
            response.send({message:"Invalid password"})
        }
        else{
            
            //send the token to the client
            //const secrete=process.env.SECRETE-KEY;
            let token=jwt.sign({username:userofDB.username},'vinayu')
            //send the token to the client
            console.log(token)

            response.send({message:"login successfully",payload:token,userobj:userofDB})
        }
    }
}))



//login admin
userApi.post('/login-admin',expressAsyncHandler(async(request,response)=>{

    //include usercollection
    let admincollectionobj=request.app.get("admincolobject");

    //include credential from the client
    let credobj2=request.body;
    console.log(credobj2.username)
    //verify username
    let adminofDB= await admincollectionobj.findOne({username:credobj2.username})
    // username not matched
    console.log(adminofDB)
    if(adminofDB===null)
    {
        response.send({message:"Invalid username"})
    }
    else{
        //match the passwords
        let matchpassword2= await bcryptjs.compare(credobj2.password,adminofDB.password);
        //not matched 
        if(matchpassword2===false)
        {
            //send the response to the client
            response.send({message:"Invalid password"})
        }
        else{
            //send the token to the client
            //const secrete=process.env.SECRETE-KEY;
            let token=jwt.sign({username:adminofDB.username},'vinayuiuii')
            //send the token to the client
            response.send({message:"login successfully",payload:token,userobj:adminofDB})
        }
    }
})) 

module.exports=userApi;

