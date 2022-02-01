const { Sequelize,sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Purchase = sequelize.define("Purchase",{
        PurchaseOrderID : {
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4(),
            primaryKey: true
        },
        CustomerID : {
            type : DataTypes.STRING,
            model: 'Customer',
            key: 'CustomerID'
        },
        ProductName : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        Quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        Pricing : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        MRP : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
            
    });

    return Purchase;
}    
