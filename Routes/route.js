const express = require('express');
const Router = express.Router();

const customer_controller = require('../controller/customer_controller');
const purchase_controller = require('../controller/purchase_controller');
const shipping_controller = require('../controller/shipping_controller');

Router.post('/addCustomer', customer_controller.addCustomer);
Router.post('/addPurchaseOrder', purchase_controller.addPurchaseOrder);
Router.post('/addShippingDetails', shipping_controller.addShippingDetails);

Router.get('/CustomerwithShipment/:City',customer_controller.getCustomerwithShipment);
Router.get('/CustomerwithPurchaseOrder',customer_controller.getCustomerwithPurchaseOrder);
Router.get('/CustomerwithPurchaseandShipment',customer_controller.getCustomerwithPurchaseandShipment);

module.exports = Router;