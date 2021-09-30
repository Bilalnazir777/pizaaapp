"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApi = exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_routes_1 = require("./order.routes");
const menu_routes_1 = require("./menu.routes");
const Customer_routes_1 = require("./Customer.routes");
const Login_route_1 = require("./Login.route");
const UserAuth_1 = require("../middleware/UserAuth");
class MainRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.use('/order', UserAuth_1.TokenVarifier, order_routes_1.orderrouteapi);
        this.router.use('/menu', menu_routes_1.menurouteapi);
        this.router.use('/Cust', Customer_routes_1.custrouteapi);
        this.router.use('/', Login_route_1.loginrouteapi);
    }
}
exports.MainRouter = MainRouter;
exports.MainApi = new MainRouter().router;
