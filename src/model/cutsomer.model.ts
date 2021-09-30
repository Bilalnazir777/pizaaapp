import { Schema, model } from "mongoose"
import { Icustomer } from "../types/document/Icustomer"

const Icustomerschema = new Schema(
    {
        customer_name: { type: String, unique: true },
        password: { type: String },
        address: { type: String },
        cell: { type: Number },
    },
    {
        timestamps: true
    }
)

export const customerschema = model<Icustomer>('Icustomerschema', Icustomerschema)
