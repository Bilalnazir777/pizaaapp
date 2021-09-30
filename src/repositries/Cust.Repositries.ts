import {customerschema} from "../model/cutsomer.model";
import { Icustomer } from "../types/document/Icustomer";
import { savereqcust } from "../types/request/Cust.Request";

export class mainCust{
    constructor() {  }

    saveCust(customer:savereqcust){
        return new customerschema(customer).save()
    }

    ReturnUser(customer:any){
        return customerschema.findOne({customer_name:customer.Customername , password:customer.password})
    }
}