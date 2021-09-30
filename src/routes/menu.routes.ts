import express from 'express';
import {menucontroller} from '../controller/menu.controller';
import { Imenu } from '../types/document/Imenu';
import CustomeError from '../utills/error';
import {saverespizza} from '../types/response/menu.response';
import { savereqpizza } from '../types/request/menu.request';

export class menuroutes{
    router:express.Router
    constructor(){
        this.router = express.Router()
        this.routes()
    }
    routes(){

        //savepizza
        this.router.post('/savemenu' , async(req,res,next)=>{
            const pizza:savereqpizza = req.body
            const save_pizza:saverespizza = await new menucontroller().Savepizza(pizza)
            res.json({
                message:save_pizza
            })
        })
    }
}
export const menurouteapi = new menuroutes().router