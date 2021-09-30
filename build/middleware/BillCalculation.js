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
exports.bill_Calculation = void 0;
const menu_repositries_1 = require("../repositries/menu.repositries");
const bill_Calculation = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        //bill calculation
        const pizza = yield new menu_repositries_1.mainmenu().getpizzaprice(req.body.pizzaid);
        const total_dollarbill = (req.body.pizza_quantity * pizza.dollar_Price) + pizza.Delivery_cost;
        const total_eurobill = (req.body.pizza_quantity * pizza.euro_price) + pizza.Delivery_cost;
        res.locals.total_dollarbill = total_dollarbill;
        res.locals.total_eurobill = total_eurobill;
        next();
    });
};
exports.bill_Calculation = bill_Calculation;
