const { Sequelize,sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Customer = sequelize.define("Customer",{
        CustomerID : {
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4(),
            primaryKey: true
        },
        CustomerName : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        Email : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            },
            unique: true
        },
        MobileNumber : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            },
            unique: true
        },
        City : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        }    
    });

    return Customer;
}    
