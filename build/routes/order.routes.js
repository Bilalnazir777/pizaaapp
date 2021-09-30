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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderrouteapi = exports.orderroutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controller/order.controller");
const BillCalculation_1 = require("../middleware/BillCalculation");
const UserAuth_1 = require("../middleware/UserAuth");
class orderroutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        //getorder
        this.router.post('/getorder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const order = yield new order_controller_1.ordercontroller().Getorder(getreq);
                res.send(order);
            }
            catch (error) {
                next(error);
            }
        }));
        //saveorder
        this.router.post('/saveorder', BillCalculation_1.bill_Calculation, UserAuth_1.TokenVarifier, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = req.body;
                const new_order = yield new order_controller_1.ordercontroller().Saveorder(order);
                res.json({
                    Order: new_order,
                    Total_dollarprice: res.locals.total_dollarbill,
                    Total_europrice: res.locals.total_eurobill
                });
            }
            catch (error) {
                next(error);
            }
        }));
        //updateorder
        this.router.put('/updateorder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = req.body;
                const updated_order = yield new order_controller_1.ordercontroller().Updateorder(order);
                res.json({
                    message: updated_order
                });
            }
            catch (error) {
                next(error);
            }
        }));
        //deleteorder
        this.router.delete('/deleteorder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = req.body;
                const del_order = yield new order_controller_1.ordercontroller().Deleteorder(order);
                res.json({
                    message: del_order
                });
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.orderroutes = orderroutes;
exports.orderrouteapi = new orderroutes().router;
