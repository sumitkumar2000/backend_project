const { Sequelize,sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Shipping = sequelize.define("Shipping",{
        PurchaseOrderID : {
            type : DataTypes.STRING,
            model: 'Purchase',
            key: 'PurchaseOrderID'

        },
        CustomerID : {
            type : DataTypes.STRING,
            model: 'Customer',
            key: 'CustomerID'
        },
        Address : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        City : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },   
        Pincode : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
    });

    return Shipping;
}    
