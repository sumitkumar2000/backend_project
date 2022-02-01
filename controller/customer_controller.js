const Customer = require('../models').Customer;
const Shipping = require('../models').Shipping;
const Purchase = require('../models').Purchase;

exports.addCustomer = async function(req, res) {
    
    const data = {
        CustomerName : req.body.CustomerName,
        Email : req.body.Email,
        MobileNumber : req.body.MobileNumber,
        City : req.body.City
    }
    try{
        const new_customer = await Customer.create(data);
    
        if(new_customer === null)
            res.send({error:'Server Error. Please Try Again'});
        else{
            res.send({message:'Customer Registered Successfully!'});
        }    
    }catch(err){
        res.send({error : err["errors"][0]["message"]});
    }            
}

exports.getCustomerwithShipment = async function(req,res){

    try{
        const data = await Customer.findAll({ where : { 'City':req.params.City}});

        var result = [];

        for(x = 0; x< data.length; x++)
        {
            var response = await Shipping.findAll({where: {'CustomerID':data[x].CustomerID}});
            var final = {
                CustomerID : data[x].CustomerID,
                CustomerName : data[x].CustomerName,
                Email : data[x].Email,
                MobileNumber : data[x].MobileNumber,
                City : data[x].City,
                Shipment : response
            };
            
            result.push(final);
        }

        res.send(result);
    }catch(err){
        res.send({error : err["errors"][0]["message"]});
    }    
}

exports.getCustomerwithPurchaseOrder = async function(req,res){
    try{
        const data = await Customer.findAll();
        var result = [];

        for(x = 0; x< data.length; x++)
        {
            var response = await Purchase.findAll({where: {'CustomerID':data[x].CustomerID}});
            var final = {
                CustomerID : data[x].CustomerID,
                CustomerName : data[x].CustomerName,
                Email : data[x].Email,
                MobileNumber : data[x].MobileNumber,
                City : data[x].City,
                purchaseOrder : response
            };
            
            result.push(final);
        }
        
        res.send(result);

    }catch(err){
        res.send({error : err["errors"][0]["message"]});
    }
}

exports.getCustomerwithPurchaseandShipment = async function(req,res){
    try{
        const data = await Customer.findAll();
        var result = [];

        for(x = 0; x< data.length; x++)
        {
            var response = await Purchase.findAll({where: {'CustomerID':data[x].CustomerID}});
            
            var final = {
                CustomerID : data[x].CustomerID,
                CustomerName : data[x].CustomerName,
                Email : data[x].Email,
                MobileNumber : data[x].MobileNumber,
                City : data[x].City,
                purchaseOrder : []
            };

            for(y=0;y<response.length;y++)
            {
                var ShipmentResponse = await Shipping.findOne({where : {'PurchaseOrderID':response[y].PurchaseOrderID}});
                
                final["purchaseOrder"].push({
                    PurchaseOrderID : response[y].PurchaseOrderID,
                    ProductName : response[y].ProductName,
                    Quantity : response[y].Quantity,
                    Pricing : response[y].Pricing,
                    MRP : response[y].MRP,
                    shipmentDetail : ShipmentResponse
                })
            }
            
            result.push(final);
        }
        
        res.send(result);

    }catch(err){
        res.send({error : err["errors"][0]["message"]});
    }
}
