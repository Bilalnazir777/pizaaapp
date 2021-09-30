import {menuschema} from "../model/menu.model";
import { Imenu } from "../types/document/Imenu";
import { savereqpizza } from "../types/request/menu.request";

export class mainmenu{
    constructor() {  }

    savepizza(pizza:savereqpizza){
        return new menuschema(pizza).save()
    }

    //for getting pizza price in dollar and euro
    async getpizzaprice(id:string) :Promise<number>{
        let pizza = await menuschema.findById(id)
        return  <any>{

             dollar_Price: pizza?.price_in_dollar , 
             euro_price: pizza?.price_in_euro,
            Delivery_cost: pizza?.delivery_cost
            
        }
    }

    
}