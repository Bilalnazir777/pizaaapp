import { orderschema } from "../model/order.model";
import {Iorder} from "../types/document/Iorder"
import { saveorder, updateorder } from "../types/request/order.req";

export class mainorder{
    constructor(){ }

    getorder(_id:string){
        return orderschema.findById(_id)
    }

    async saveorder(order:saveorder){
        let saved_order= await new orderschema(order).save();
        return (await saved_order.populate('customerid')).populate('pizzaid')
    }

    async updateorder(orderr:updateorder){
        let update_order= await orderschema.findByIdAndUpdate(orderr._id ,orderr,{new:true});
        return (await update_order.populate('customerid')).populate('pizzaid')
    }

    deleteorder(_id:string){
        return orderschema.findByIdAndDelete(_id)
    }
}