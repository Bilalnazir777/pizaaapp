import  {Document} from "mongoose"
 export interface Icustomer extends Document{
     _id:string;
     customer_name:string;
     password:string;
     address:string;
     cell:number;
     createdat?:string;
     updatedat?:string
 }