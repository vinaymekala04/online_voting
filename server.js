const exp=require('express');
const app=exp();
const cors=require('cors')
app.use(cors())



 //import path module
 const path=require('path');
 //connect build of react app with nodejs
 app.use(exp.static(path.join(__dirname,'./build')));

 const mclient=require("mongodb").MongoClient;



  //importing api's
 const userapi=require('./API/user-api');
const productapi=require('./API/product-api');

app.use('/user-api',userapi)
app.use('/product-api',productapi)

//deals with page refresh
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
  });
 //import dotenv core module
 //require("dotenv").config();
//connect to the database
const DBurl=process.env.URL;

//connect with mongodb server
mclient.connect(DBurl)
.then((client)=>{

    //database
    let dbobject=client.db("newdb");

    //user collection
    let usercolobject=dbobject.collection("usercol");

    //product collection
    let productcolobject=dbobject.collection("productcol");

    //condidate collection
    let candidatecolobject=dbobject.collection("candidate");

    //voting collection
    let vottingcolobject=dbobject.collection("votting");

    //admin collection
    let admincolobject=dbobject.collection("admincollection");

    //contact us collection
    let contactcolobject=dbobject.collection("contactUscollection");

    //showing collections objects to api's
    app.set("usercolobject",usercolobject);
    app.set("productcolobject",productcolobject);
    app.set("candidatecolobject",candidatecolobject);
    app.set("vottingcolobject",vottingcolobject);
    app.set("admincolobject",admincolobject);
    app.set("contactcolobject",contactcolobject);

    console.log('database connection successfull..');
})
.catch(error=>console.log('error in database connection',error))





//invalid path
app.use((request,response,next)=>{
    response.send({message:'invalid path raises...'})

    next();
})
//errer path
app.use((err,request,response,next)=>{
    response.send({message:"error raises...",reason: `${err.message}` })
    
    next();
})

//const port=process.env.PORT; 
app.listen(process.env.PORT,()=>console.log('serve running at port number 4000.....'));;
