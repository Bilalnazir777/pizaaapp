import express from 'express';
import { orderrouteapi } from "./order.routes";
import { menurouteapi } from "./menu.routes";
import { custrouteapi } from "./Customer.routes";
import { loginrouteapi } from './Login.route';
import { TokenVarifier } from '../middleware/UserAuth';


export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/order', TokenVarifier, orderrouteapi)
        this.router.use('/menu', menurouteapi)
        this.router.use('/Cust', custrouteapi)
        this.router.use('/', loginrouteapi)
    }
}
export const MainApi = new MainRouter().router
