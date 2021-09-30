export interface saveorder{
    contact_no:number,
    delivery_address:string,
    pizza_quantity:number
    customerid:string | any
    pizzaid:string | any

}
export interface updateorder{
    _id:string
    pizza_quantity:number
    customerid:string | any
    pizzaid:string | any
}
export interface delorder{
    _id:string
    
}
export interface getorder{
    _id:string
}