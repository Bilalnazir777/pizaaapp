"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainorder = void 0;
const order_model_1 = require("../model/order.model");
class mainorder {
    constructor() { }
    getorder(_id) {
        return order_model_1.orderschema.findById(_id);
    }
    saveorder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            let saved_order = yield new order_model_1.orderschema(order).save();
            return (yield saved_order.populate('customerid')).populate('pizzaid');
        });
    }
    updateorder(orderr) {
        return __awaiter(this, void 0, void 0, function* () {
            let update_order = yield order_model_1.orderschema.findByIdAndUpdate(orderr._id, orderr, { new: true });
            return (yield update_order.populate('customerid')).populate('pizzaid');
        });
    }
    deleteorder(_id) {
        return order_model_1.orderschema.findByIdAndDelete(_id);
    }
}
exports.mainorder = mainorder;
