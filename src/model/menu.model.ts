import {Schema,model} from "mongoose"
import  {Imenu} from "../types/document/Imenu"

const Imenuschema = new Schema(
    {
        pizza_flavour: {type:String},
        price_in_dollar:{type:Number},
        price_in_euro:{type:Number},
        delivery_cost:{type:Number},
    },
    {
        timestamps :true
    }

);
export const menuschema =  model<Imenu>('Imenuschema' ,Imenuschema)