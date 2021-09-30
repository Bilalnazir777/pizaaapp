"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainCust = void 0;
const cutsomer_model_1 = require("../model/cutsomer.model");
class mainCust {
    constructor() { }
    saveCust(customer) {
        return new cutsomer_model_1.customerschema(customer).save();
    }
    ReturnUser(customer) {
        return cutsomer_model_1.customerschema.findOne({ customer_name: customer.Customername, password: customer.password });
    }
}
exports.mainCust = mainCust;
