import { Icustomer } from '../types/document/Icustomer';
import { mainCust } from '../repositries/Cust.Repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { LoginResponse } from '../types/response/CUSTOMERLOGINRES';
import { LoginRequest } from '../types/request/CUSTOMERLOGINREQ'
import jwt, { Secret } from "jsonwebtoken";
import { json } from 'stream/consumers';
require('dotenv').config();


@Route('/')
@Tags('login')

export class LoginController {
    constructor() { }

    @Post("/login")
    async login(@Body() customer: LoginRequest): Promise<LoginResponse> {
        const authcustomer = await new mainCust().ReturnUser(customer)
        if (!authcustomer)
            throw new CustomeError(404, "user not varified because of invalid credential ")
        return <LoginResponse>{
            TOKEN_KEY: jwt.sign(JSON.stringify(authcustomer), <Secret>process.env.TOKEN_KEY),
            message: "credential approved"
        }
    }

}