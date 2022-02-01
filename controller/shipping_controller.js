const Shipping  = require('../models').Shipping;

exports.addShippingDetails = async function(req,res){
    
    const data = {
        PurchaseOrderID : req.body.PurchaseOrderID,
        CustomerID : req.body.CustomerID,
        Address : req.body.Address,
        City : req.body.City,
        Pincode : req.body.Pincode
    }

    try{
        const new_shipping_detail = await Shipping.create(data);
    
        if(new_shipping_detail === null)
            res.send({error:'Server Error. Please Try Again'});
        else{
            res.send({message:'Shipping Detail added Successfully!'});
        }    
    }catch(err){
        res.send({error : err["errors"][0]["message"]});
    } 
}