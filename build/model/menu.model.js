"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuschema = void 0;
const mongoose_1 = require("mongoose");
const Imenuschema = new mongoose_1.Schema({
    pizza_flavour: { type: String },
    price_in_dollar: { type: Number },
    price_in_euro: { type: Number },
    delivery_cost: { type: Number },
}, {
    timestamps: true
});
exports.menuschema = (0, mongoose_1.model)('Imenuschema', Imenuschema);
