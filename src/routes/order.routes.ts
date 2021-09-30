import express from 'express';
import { ordercontroller } from '../controller/order.controller';
import { Iorder } from '../types/document/Iorder';
import CustomeError from '../utills/error';
import { saveupdateresorder } from '../types/response/order.res';
import { saveorder, updateorder, getorder, delorder } from '../types/request/order.req';
import { bill_Calculation } from '../middleware/BillCalculation';
import { TokenVarifier } from '../middleware/UserAuth'




export class orderroutes {
    router: express.Router;
    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {

        //getorder
        this.router.post('/getorder', async (req, res, next) => {
            try {
                const getreq: Iorder = req.body
                const order: saveupdateresorder = await new ordercontroller().Getorder(getreq)
                res.send(order)

            } catch (error) {
                next(error);

            }

        })

        //saveorder
        this.router.post('/saveorder', bill_Calculation, TokenVarifier, async (req, res, next) => {
            try {
                const order: saveorder = req.body
                const new_order: saveupdateresorder = await new ordercontroller().Saveorder(order)

                res.json({
                    Order: new_order,
                    Total_dollarprice: res.locals.total_dollarbill,
                    Total_europrice: res.locals.total_eurobill


                })
            } catch (error) {
                next(error);
            }
        })

        //updateorder
        this.router.put('/updateorder', async (req, res, next) => {
            try {
                const order: updateorder = req.body
                const updated_order: saveupdateresorder = await new ordercontroller().Updateorder(order)
                res.json({
                    message: updated_order
                })
            } catch (error) {
                next(error)
            }
        })

        //deleteorder
        this.router.delete('/deleteorder', async (req, res, next) => {
            try {
                const order: delorder = req.body
                const del_order: saveupdateresorder = await new ordercontroller().Deleteorder(order)
                res.json({
                    message: del_order
                })
            } catch (error) {
                next(error)
            }
        })
    }

}
export const orderrouteapi = new orderroutes().router