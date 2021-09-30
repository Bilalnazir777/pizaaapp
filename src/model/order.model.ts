import {Schema ,model} from "mongoose"
import {Iorder} from "../types/document/Iorder"

const Iorderschema = new Schema(
    {
        pizza_quantity:{type:Number},
        total_bill:{type:Number},
        customerid:{ type: Schema.Types.ObjectId, ref: 'Icustomerschema' },
        pizzaid :{ type: Schema.Types.ObjectId , ref: 'Imenuschema'}
        
    },
    {
       timestamps:true
    }
)

export const orderschema = model<Iorder>('Iorderschema' , Iorderschema)