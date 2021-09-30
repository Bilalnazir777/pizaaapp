"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ordercontroller = void 0;
const order_repositries_1 = require("../repositries/order.repositries");
const error_1 = __importDefault(require("../utills/error"));
const tsoa_1 = require("tsoa");
let ordercontroller = class ordercontroller {
    constructor() { }
    Getorder(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new order_repositries_1.mainorder().getorder(getreq._id);
            if (order === null)
                throw new error_1.default(404, "no order");
            return order;
        });
    }
    Saveorder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const save_order = yield new order_repositries_1.mainorder().saveorder(order);
            if (save_order === null)
                throw new error_1.default(404, 'order not updated');
            return save_order;
        });
    }
    Updateorder(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const update_order = yield new order_repositries_1.mainorder().updateorder(getreq);
            if (update_order === null)
                throw new error_1.default(404, 'order not updated');
            return update_order;
        });
    }
    Deleteorder(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new order_repositries_1.mainorder().deleteorder(getreq._id);
            return order;
        });
    }
};
__decorate([
    (0, tsoa_1.Post)('/getorder'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ordercontroller.prototype, "Getorder", null);
__decorate([
    (0, tsoa_1.Post)('/saveorder'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ordercontroller.prototype, "Saveorder", null);
__decorate([
    (0, tsoa_1.Put)('/updateorder'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ordercontroller.prototype, "Updateorder", null);
__decorate([
    (0, tsoa_1.Delete)('/deleteorder'),
    (0, tsoa_1.SuccessResponse)('200', 'order deleted'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ordercontroller.prototype, "Deleteorder", null);
ordercontroller = __decorate([
    (0, tsoa_1.Route)('order'),
    (0, tsoa_1.Tags)('order'),
    __metadata("design:paramtypes", [])
], ordercontroller);
exports.ordercontroller = ordercontroller;
