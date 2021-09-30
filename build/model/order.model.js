"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderschema = void 0;
const mongoose_1 = require("mongoose");
const Iorderschema = new mongoose_1.Schema({
    pizza_quantity: { type: Number },
    total_bill: { type: Number },
    customerid: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Icustomerschema' },
    pizzaid: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Imenuschema' }
}, {
    timestamps: true
});
exports.orderschema = (0, mongoose_1.model)('Iorderschema', Iorderschema);
