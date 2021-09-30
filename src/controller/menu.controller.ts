import { Imenu } from '../types/document/Imenu';
import { mainmenu } from '../repositries/menu.repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { saverespizza } from '../types/response/menu.response';
import { savereqpizza } from '../types/request/menu.request';
@Route('menu')
@Tags('menu')

export class menucontroller{
    constructor() {  }

    @Post('/savemenu')
    async Savepizza(@Body() pizza:savereqpizza) : Promise <saverespizza>{
    const save_pizza:Imenu = await <any> new mainmenu().savepizza(pizza)
    return <saverespizza>save_pizza
    }
}