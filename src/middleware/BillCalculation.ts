
import { mainmenu } from '../repositries/menu.repositries'
import express, { NextFunction, Request, Response } from 'express'

export const bill_Calculation = async function (req: Request, res: Response, next: NextFunction) {

      //bill calculation
      const pizza: any = await new mainmenu().getpizzaprice(req.body.pizzaid)
      const total_dollarbill = (req.body.pizza_quantity * pizza.dollar_Price) + pizza.Delivery_cost
      const total_eurobill = (req.body.pizza_quantity * pizza.euro_price) + pizza.Delivery_cost
      res.locals.total_dollarbill = total_dollarbill
      res.locals.total_eurobill = total_eurobill

      next();
}