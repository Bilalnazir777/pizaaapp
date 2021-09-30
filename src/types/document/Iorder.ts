import { Document } from "mongoose";

export interface Iorder extends Document{
    _id:string
    pizza_quantity:number
    total_bill:number
    customerid:string | any
    pizzaid:string | any
}