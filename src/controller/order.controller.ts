import { Iorder } from '../types/document/Iorder';
import { mainorder } from '../repositries/order.repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { saveupdateresorder } from '../types/response/order.res';
import { saveorder, updateorder, getorder, delorder } from '../types/request/order.req';
@Route('order')
@Tags('order')

export class ordercontroller {
    constructor() { }

    @Post('/getorder')
    async Getorder(@Body() getreq: getorder): Promise<saveupdateresorder> {
        const order: getorder = await <any>new mainorder().getorder(getreq._id)
        if (order === null) throw new CustomeError(404, "no order")
        return <saveupdateresorder>order
    }
    @Security('api_key')
    @Post('/saveorder')
    async Saveorder(@Body() order: saveorder): Promise<saveupdateresorder> {
        const save_order = await <any>new mainorder().saveorder(order)
        if (save_order === null) throw new CustomeError(404, 'order not updated')
        return <saveupdateresorder>save_order
    }

    @Put('/updateorder')
    async Updateorder(@Body() getreq: updateorder): Promise<saveupdateresorder> {
        const update_order: updateorder = await <any>new mainorder().updateorder(getreq)
        if (update_order === null) throw new CustomeError(404, 'order not updated')
        return <saveupdateresorder>update_order
    }

    @Delete('/deleteorder')
    @SuccessResponse('200', 'order deleted')
    async Deleteorder(@Body() getreq: delorder): Promise<saveupdateresorder> {
        const order: delorder = await <any>new mainorder().deleteorder(getreq._id)
        return <saveupdateresorder>order
    }

}