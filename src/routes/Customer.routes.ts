import express from 'express';
import {Customercontroller} from '../controller/Cust.Controller';
import { Icustomer } from '../types/document/Icustomer';
import CustomeError from '../utills/error';
import {saverescust} from '../types/response/Cust.Response';
import { savereqcust } from '../types/request/Cust.Request';

export class Custroutes{
    router:express.Router
    constructor(){
        this.router = express.Router()
        this.routes()
    }
    routes(){

        //savecustomer
        this.router.post('/savecustomer' , async(req,res,next)=>{
            const Cust:savereqcust = req.body
            const save_cust:saverescust = await new Customercontroller().SaveCustomer(Cust)
            res.json({
                message:save_cust
            })
        })
    }
}
export const custrouteapi = new Custroutes().router