"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerschema = void 0;
const mongoose_1 = require("mongoose");
const Icustomerschema = new mongoose_1.Schema({
    customer_name: { type: String, unique: true },
    address: { type: String },
    cell: { type: Number },
}, {
    timestamps: true
});
exports.customerschema = (0, mongoose_1.model)('Icustomerschema', Icustomerschema);
