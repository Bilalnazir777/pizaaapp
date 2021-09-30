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
exports.mainmenu = void 0;
const menu_model_1 = require("../model/menu.model");
class mainmenu {
    constructor() { }
    savepizza(pizza) {
        return new menu_model_1.menuschema(pizza).save();
    }
    //for getting pizza price in dollar and euro
    getpizzaprice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let pizza = yield menu_model_1.menuschema.findById(id);
            return {
                dollar_Price: pizza === null || pizza === void 0 ? void 0 : pizza.price_in_dollar,
                euro_price: pizza === null || pizza === void 0 ? void 0 : pizza.price_in_euro,
                Delivery_cost: pizza === null || pizza === void 0 ? void 0 : pizza.delivery_cost
            };
        });
    }
}
exports.mainmenu = mainmenu;
