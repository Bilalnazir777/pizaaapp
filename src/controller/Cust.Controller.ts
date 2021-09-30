import { Icustomer } from '../types/document/Icustomer';
import { mainCust } from '../repositries/Cust.Repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { saverescust } from '../types/response/Cust.Response';
import { savereqcust } from '../types/request/Cust.Request';

@Route('Cust')
@Tags('Cust')

export class Customercontroller{
    constructor() {  }

    @Post('/saveCustomer')
    async SaveCustomer(@Body() Cust:savereqcust) : Promise <saverescust>{
    const save_cust:saverescust = await <any> new mainCust().saveCust(Cust)
    return <saverescust>save_cust
    }
}