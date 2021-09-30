import express, { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken';
import { Icustomer } from '../types/document/Icustomer';
import CustomeError from "../utills/error"




export var TokenVarifier = (req: Request, res: Response, next: NextFunction) => {
    var token = req.header('token')
    if (!token) {
        let err = new CustomeError(403, "token required fof login");
        console.log('no token')
        next(err)

    }
    else {
        try {

            const decoded = jwt.verify(token, <jwt.Secret>process.env.TOKEN_KEY)

            req.body.customer_name = <Icustomer>decoded
        }
        catch (err) {
            err = new CustomeError(403, "invalid token key")
            next(err)
        }
    }
    next()
}