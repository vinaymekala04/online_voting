let exp=require('express')
let productApi=exp.Router();
  
productApi.use(exp.json())
//import express async handler
const expressAsyncHandler = require('express-async-handler');

//get all products
productApi.get('/getproducts',expressAsyncHandler(async(request,response)=>{

    let productobj=request.app.get("productcolobject");

    let product=await productobj.find().toArray()
    response.send({message:"get all products",payload:product})

}));


//get product by id
productApi.get('/getproduct/:id',expressAsyncHandler(async(request,response)=>{
    //get product collection
    let productobj=request.app.get("productcolobject");
    // get id
    let pid=(+request.params.id)

    //get product by id
    let product=await productobj.findOne({productId:pid})
    if(product==null)
    {
        response.send({message:"id not existed "})
    }
    else{
        response.send({message:"id existed ",payload:product})
    }
}));

//post the new product

/*productApi.post('/create-product',(request,response)=>{

    //including product collection
    let productobj2=request.app.get("productcolobject");

    //new product body
    let newproduct=request.body;

    productobj2.insertOne(newproduct,(err,result)=>{

        if(err)
        {
            console.log("error in insertOne new product")
        }
        else{
            response.send({message:"created new product successfully.."})
        }
    })
})
*/

// creating product based on promice
/*productApi.post('/create-product',(request,response)=>{

    //including product collection
    let productobj2=request.app.get("productcolobject");

    //new product body
    let newproduct=request.body;

    productobj2.insertOne(newproduct)
    .then(mes=>response.send({message:"created new product successfully.."}))
    .catch(error=>console.log("error in insertOne new product"))

        
    
})*/


//creatig   new product based on async await

    productApi.post('/create-product', expressAsyncHandler (async(request,response)=>{
        


        let productobj=request.app.get("productcolobject");
    
        let newobj=request.body;
    
        let result= await productobj.insertOne(newobj)
        response.send({message:"created new product successfully.."})
        
    }));


//update product

productApi.put('/update-product',expressAsyncHandler(async(request,response)=>{

    //get collection
    let productcol=request.app.get('productcolobject');


    //updated product body
    let updateproduct=request.body;

    let product=await productcol.updateOne({productId:updateproduct.productId},{$set:{...updateproduct}})
    response.send({message:"product update susccessfully.."})


}))

//delete product based on id

productApi.delete('/remove-product/:id',expressAsyncHandler(async(request,response)=>{
    //get product collection
    let productobj=request.app.get("productcolobject");
    // get id
    let pid=(+request.params.id)

    //get product by id
    let product=await productobj.deleteOne({productId:pid})
    if(product==null)
    {
        response.send({message:"product not deleted "})
    }
    else{
        response.send({message:"Product deleted successfully.. ",payload:product})
    }
}));



    
    




module.exports=productApi;