"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menurouteapi = exports.menuroutes = void 0;
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("../controller/menu.controller");
class menuroutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        //savepizza
        this.router.post('/savemenu', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const pizza = req.body;
            const save_pizza = yield new menu_controller_1.menucontroller().Savepizza(pizza);
            res.json({
                message: save_pizza
            });
        }));
    }
}
exports.menuroutes = menuroutes;
exports.menurouteapi = new menuroutes().router;
