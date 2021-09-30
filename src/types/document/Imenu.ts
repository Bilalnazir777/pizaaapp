import { Document } from "mongoose";
export interface Imenu extends Document{
    _id:string;
    pizza_flavour:string;
    price_in_dollar:number;
    price_in_euro:number;
    delivery_cost:number
}
