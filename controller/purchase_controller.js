const Purchase = require('../models').Purchase;

exports.addPurchaseOrder = async function(req,res){

    if( req.body.Pricing > req.body.MRP)
        return res.send({error:' Pricing can\'t be greater than MRP'});
    
    const data = {
        CustomerID : req.body.CustomerID,
        ProductName : req.body.ProductName,
        Quantity : req.body.Quantity,
        Pricing : req.body.Pricing,
        MRP : req.body.MRP
    }

    try{
        const new_purchase_order = await Purchase.create(data);
    
        if(new_purchase_order === null)
            res.send({error:'Server Error. Please Try Again'});
        else{
            res.send({message:'Puchase Order added Successfully!'});
        }    
    }catch(err){
        res.send({error : err["errors"][0]["message"]});
    } 

}